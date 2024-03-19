import React, { useEffect, useRef } from 'react';
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
            <a class="carousel-item" href="#one!"><img src="assets/DuoCichorium.jpg" /></a>
            <a class="carousel-item" href="#two!"><img src="assets/Cic.jpg" /></a>
            <a class="carousel-item" href="#three!"><img src="assets/Trevor.jpeg" /></a>
        </div>
    );
};

export default Carousel;