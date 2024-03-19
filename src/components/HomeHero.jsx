import { useEffect } from "react";
import glow from "../scripts/glow.js"
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
            <img src="assets/frog.png" alt="" className="frog" id="frog" />
            <p id="frog-text" className="frog">DO NOT CLICK ME</p>
            <Carousel />

            <p className="bio">Duo Cichorium is comprised of interdisciplinary artists Jasmine Tsui and Louis Pino. Like the Chicory plant, the two performers are not native to Ontario, but have taken root in the environment of Toronto following their tertiary education. Together, they strive to synthesize their aesthetic values with their artistic practices: playfulness, absurdity, and abstraction in conjunction with music performance, improvisation, integrated custom electronics, and visual art. The versatility of their practice spans from intimate chamber pieces to eye and ear straining multimedia works. Jaz and Pino have both received Masters degrees from the University of Toronto studying under Aiyun Huang, Beverley Johnston, and Charles Settle.</p>
            {/* <div className="hero-right">
                <div className="jaz-gif-bg"></div>
                <img id="jaz-gif" src="assets/DuoCichorium.jpg" />
            </div> */}
        </section >
    );

    return loaded()
}

export default HomeHero;
