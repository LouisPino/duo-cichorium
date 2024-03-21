import React, { useEffect, useState, useRef } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Carousel = () => {
    const [carouselInstance, setCarouselInstance] = useState(false);
    const carouselTimer = useRef(null); // Use useRef for persistent mutable storage

    useEffect(() => {
        const options = { dist: 0, indicators: true, numVisible: 5 };
        let instances = M.Carousel.init(document.querySelector(".carousel"), options);
        // Set the interval to advance the carousel
        clearInterval(carouselTimer.current);
        carouselTimer.current = setInterval(() => {
            instances.next();
        }, 5000);
        setCarouselInstance(true);

        // Setup event listener for window resize
        const handleResize = () => {
            if (instances) {
                console.log("hit")
                clearInterval(carouselTimer.current);
                instances.destroy()
                instances = M.Carousel.init(document.querySelector(".carousel"), options);
                carouselTimer.current = setInterval(() => {
                    instances.next();
                }, 5000);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to clear interval and remove event listener
        return () => {
            clearInterval(carouselTimer.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty array ensures this effect runs only once on mount
    return (
        <div className="carousel">
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046650/cichorium/carousel/carousel3_u9jjjo.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046652/cichorium/carousel/carousel7_veufl2.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046648/cichorium/carousel/carousel5_lkpxki.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046496/cichorium/carousel/carousel1_lrvy2z.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046170/cichorium/carousel/carousel4_zv4zqs.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046165/cichorium/carousel/carousel6_wn4rrn.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046166/cichorium/carousel/carousel8_snxrpz.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046168/cichorium/carousel/carousel2_ymyfen.jpg" alt="img1" /></a>
        </div>


    );
};




export default Carousel;