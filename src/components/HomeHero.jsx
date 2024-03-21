import { useEffect } from "react";
import glow from "../scripts/glow.js"
import { Link } from "react-router-dom";

import { resetFrog, hop } from "../scripts/hop.js"
import Carousel from "./Carousel.jsx"
function HomeHero() {
    useEffect(() => {
        const gifEl = document.getElementById('jaz-gif')
        const tagEls = document.querySelectorAll('.tag-line')
        const frogImg = document.getElementById("frog");
        if (gifEl) {
            gifEl.addEventListener('click', glow)
            for (let el of tagEls) {
                el.addEventListener('click', glow)
            }
            frogImg.addEventListener("click", hop);
            resetFrog()
        }
    }, [])

    const loaded = () => (
        <section className="hero">
            <Carousel />

            <p className="bio">Duo Cichorium is comprised of interdisciplinary artists Jasmine Tsui and Louis Pino. Like the Chicory plant, the two performers are not native to Ontario, but have taken root in the environment of Toronto following their tertiary education.</p>
            {/* <div className="hero-right">
                <div className="jaz-gif-bg"></div>
                <img id="jaz-gif" src="assets/DuoCichorium.jpg" />
            </div> */}
            <Link className="Link" to="/about"><button className="button margin-auto center-text">Learn More</button></Link>
        </section >
    );

    return loaded()
}

export default HomeHero;
