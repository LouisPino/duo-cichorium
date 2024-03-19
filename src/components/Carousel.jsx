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
            <a class="carousel-item" href="#one!"><img src="assets/DuoCichorium.jpg" alt="img1" /></a>
            <a class="carousel-item" href="#two!"><img src="assets/Cic.jpg" alt="img2" /></a>
            <a class="carousel-item" href="#three!"><img src="assets/Trevor.jpeg" alt="img3" /></a>
        </div>
    );
};

export default Carousel;