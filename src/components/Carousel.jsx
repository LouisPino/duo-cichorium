import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Carousel = () => {
    useEffect(() => {
        // Initialize the carousel

        const instances = M.Carousel.init(document.querySelector(".carousel"));
        // Set the interval to advance the carousel
        const carouselTimer = setInterval(() => {
            instances.next();
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(carouselTimer);
    }, []); // Empty array ensures this effect runs only once on mount

    return (
        <div className="carousel">
            <a class="carousel-item"><img src="assets/carousel2.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="assets/carousel3.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="assets/carousel4.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="assets/carousel5.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="assets/carousel6.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="assets/carousel7.jpg" alt="img1" /></a>
            <a class="carousel-item"><img src="assets/carousel8.jpg" alt="img1" /></a>
        </div>


    );
};

export default Carousel;