import { Link } from "react-router-dom";
import Carousel from "./Carousel.jsx"
function HomeHero({ burgerDrop, setBurgerDrop, workDrop, setWorkDrop }) {
    function closeBurger() {
        setBurgerDrop(false)
    }
    const loaded = () => (
        <section className="hero">
            <Carousel />
            <p className="home-bio"><span className="here bio" style={{ padding: 0 }}>Duo Cichorium </span>is comprised of interdisciplinary artists Jasmine Tsui and Louis Pino. Like the Chicory plant, the two performers are not native to Ontario, but have taken root in the environment of Toronto.</p>
            <Link className="Link" to="/about"><button id="about-us" className="button margin-auto center-text" onClick={closeBurger}>About Us</button></Link>
        </section >
    );

    return loaded()
}

export default HomeHero;
