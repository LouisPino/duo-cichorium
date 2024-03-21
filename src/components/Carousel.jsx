import React, { useEffect, useState, useRef } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Carousel = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const carouselTimer = useRef(null); // Use useRef for persistent mutable storage
    const carouselInstance = useRef(null); // Mutable reference for instances


    useEffect(() => {
        function setIdx() {
            if (carouselInstance.current) {
                console.log(carouselInstance.current.center);
            }
        }
        const options = {
            dist: 0,
            indicators: true,
            numVisible: 5,
            onCycleTo: setIdx
        };
        carouselInstance.current = M.Carousel.init(document.querySelector(".carousel"), options);

        // Set the interval to advance the carousel
        clearInterval(carouselTimer.current);
        carouselTimer.current = setInterval(() => {
            carouselInstance.current.next();
        }, 5000);

        // Setup event listener for window resize
        const handleResize = () => {
            if (carouselInstance.current) {
                clearInterval(carouselTimer.current);
                carouselInstance.current.destroy();
                carouselInstance.current = M.Carousel.init(document.querySelector(".carousel"), options);
                carouselInstance.current.set(carouselIdx);
                carouselTimer.current = setInterval(() => {
                    carouselInstance.current.next();
                }, 5000);
            }
        };

        window.addEventListener('resize', handleResize);

        // Don't forget to clean up
        return () => {
            if (carouselInstance.current) {
                clearInterval(carouselTimer.current);
                carouselInstance.current.destroy();
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [carouselIdx]); // Ensure carouselIdx is captured correctly

    return (
        <div className="carousel">
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046650/cichorium/carousel/carousel3_u9jjjo.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046652/cichorium/carousel/carousel7_veufl2.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046648/cichorium/carousel/carousel5_lkpxki.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046170/cichorium/carousel/carousel4_zv4zqs.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046165/cichorium/carousel/carousel6_wn4rrn.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046166/cichorium/carousel/carousel8_snxrpz.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046168/cichorium/carousel/carousel2_ymyfen.jpg" alt="img1" /></a>
        </div>


    );
};




export default Carousel;