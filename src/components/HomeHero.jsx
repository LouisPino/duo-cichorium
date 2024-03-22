import { useEffect } from "react";
import glow from "../scripts/glow.js"
import { Link } from "react-router-dom";
import Carousel from "./Carousel.jsx"
function HomeHero() {

    const loaded = () => (
        <section className="hero">
            <Carousel />
            <p className="bio"><span className="here bio" style={{ padding: 0 }}>Duo Cichorium </span>is comprised of interdisciplinary artists Jasmine Tsui and Louis Pino. Like the Chicory plant, the two performers are not native to Ontario, but have taken root in the environment of Toronto.</p>
            <Link className="Link" to="/about"><button className="button margin-auto center-text">About Us</button></Link>
        </section >
    );

    return loaded()
}

export default HomeHero;
