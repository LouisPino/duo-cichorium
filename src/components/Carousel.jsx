import React, { useEffect, useState, useRef } from 'react';
import Photo from "./Photo"
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Carousel = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const carouselTimer = useRef(null); // Use useRef for persistent mutable storage
    const carouselInstance = useRef(null); // Mutable reference for instances


    useEffect(() => {

        const options = {
            dist: 0,
            indicators: true,
            numVisible: 5
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


    const carouselPhotos = [
        {
            url: "https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046650/cichorium/carousel/carousel3_u9jjjo.jpg", credit: "ArrayMusic, Feb. 8, 2024",
            title: "Feedback Dreams"
        },
        {
            url: "https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046652/cichorium/carousel/carousel7_veufl2.jpg", credit: "Thomas Li",
            title: "Cichorium Gothic"
        },
        {
            url: "https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046648/cichorium/carousel/carousel5_lkpxki.jpg", credit: "ArrayMusic, Feb. 8, 2024",
            title: "Desiderium"
        },
        {
            url: "https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046170/cichorium/carousel/carousel4_zv4zqs.jpg", credit: "June 16, 2023",
            title: "Matchbox Ritual"
        },
        {
            url: "https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046165/cichorium/carousel/carousel6_wn4rrn.jpg", credit: "Thomas Li",
            title: ""
        },
        {
            url: "https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046166/cichorium/carousel/carousel8_snxrpz.jpg", credit: "Music Gallery, June 16, 2023",
            title: "Desiderium"
        },
        {
            url: "https://res.cloudinary.com/dsvcyich1/image/upload/c_fill,w_2000,h_1125,ar_16:9/v1711046168/cichorium/carousel/carousel2_ymyfen.jpg", credit: "Music Gallery, June 16, 2023",
            title: "Letter Piece"
        }
    ]



    const carouselComponents = carouselPhotos.map((photo) => {
        return <Photo carousel={true} photo={photo} />
    })





    return (
        <div className="carousel">
            {carouselComponents}
        </div>


    );
};




export default Carousel;