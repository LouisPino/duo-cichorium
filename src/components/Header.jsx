import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/header.css"
import resizeScroll from "../scripts/scrollbar.js"

function Header({ burgerDrop, setBurgerDrop, workDrop, setWorkDrop }) {
    const location = useLocation()
    const [scrolls, setScrolls] = useState(true)

    useEffect(checkHeight, [location])

    useEffect(() => {
        const hamburgerEl = document.getElementById("hamburger-div");
        const workEl = document.querySelector(".workbtn");
        const logoFlowerGifEl = document.querySelector(".cic-logo-flowers-gif")
        const logoFlowerGifReverseEl = document.querySelector(".cic-logo-flowers-gif-reverse")
        hamburgerEl.addEventListener("click", toggleBurger)
        hamburgerEl.addEventListener("mouseout", () => { if (burgerDrop) setBurgerDrop(false); })
        workEl.addEventListener("mouseover", () => { setWorkDrop(true) })
        workEl.addEventListener("mouseout", () => { setWorkDrop(false) })

        logoFlowerGifEl.addEventListener("mouseover", function(e) {
            e.target.style.opacity = 1;
        });

        // logoFlowerGifEl.addEventListener("mouseout", function(e) {
        //     e.target.style.opacity = 0;
        //     logoFlowerGifReverseEl.style.opacity = 1;
        // });
    }, [])


    function checkHeight() {
        if (window.innerHeight < document.body.scrollHeight) {
            setScrolls(true)
        } else {
            setScrolls(false)
        }
    }


    function linkClicked() {
        setBurgerDrop(false)
        setWorkDrop(false)
    }
    function toggleBurger() {
        setBurgerDrop((prev) => (!prev))
    }

    window.addEventListener('resize', handleResize)
    function handleResize() {
        if (window.innerWidth > 700 && burgerDrop === true) {
            setBurgerDrop(false)
        } else if (window.innerWidth < 700 && workDrop === true) {
            setWorkDrop(false)
        }
        resizeScroll()
        checkHeight()
    }

    window.addEventListener('scroll', checkHeight)

    return (
        <header>

            <div id="progressbar" className={`desktop-only ${scrolls ? "" : "no-width"}`}  >
                <img src="/assets/ChicoryTrans.png" className="scroll-img" alt="Chicory flower scroll indicator"/>
            </div>
            <div id="scrollpath" className="desktop-only"></div>
            <div className="header-content">
                <div className="my-nav nav-l">
                    <Link to="/">
                        <p className={`link nav-btn-text ${location.pathname === "/" ? "current-location" : ""}`} onClick={linkClicked}>Home</p>
                    </Link>
                    <Link to="/about">
                        <p className={`link nav-btn-text ${location.pathname === "/about" ? "current-location" : ""}`} onClick={linkClicked}>About</p>
                    </Link>
                    <Link to="/works">
                        <p className={`link nav-btn-text ${location.pathname === "/works" ? "current-location" : ""}`} onClick={linkClicked}>Repertoire</p>
                    </Link>
                    <Link to="/tranzac-residency">
                        <p className={`link nav-btn-text ${location.pathname === "/tranzac-residency" ? "current-location" : ""}`} onClick={linkClicked}>PEOPLE SOUP</p>
                    </Link>
                </div>
                <Link className="Link" to="/">
                    <div className="cic-logo" >
                    <div className="cic-logo-flowers"> </div>
                    <div className="cic-logo-flowers-gif"> </div>
                    <div className="cic-logo-flowers-gif-reverse"> </div>
                    </div>
                    
                </Link>
                <div className="my-nav nav-r">
                    {/* <Link to="/the-sylvan-legacy">
                        <p className="link nav-btn-text" onClick={linkClicked}>The Sylvan Legacy</p>
                    </Link> */}
                    <Link to="/press">
                        <p className={`link nav-btn-text ${location.pathname === "/press" ? "current-location" : ""}`} onClick={linkClicked}>Photos</p>
                    </Link>
                    <Link to="/events">
                        <p className={`link nav-btn-text ${location.pathname === "/events" ? "current-location" : ""}`} onClick={linkClicked}>Events</p>
                    </Link>
                    <Link to="/contact">
                        <p className={`link nav-btn-text ${location.pathname === "/contact" ? "current-location" : ""}`} onClick={linkClicked}>Contact</p>
                    </Link>
                    <div className='workbtn'>
                        <p className="nav-btn-text link">Current Projects</p>
                        {workDrop && <div className="work-content">
                            <Link to="/the-sylvan-legacy">
                                <p className="work-link-text hover-glow" onClick={linkClicked}>The Sylvan Legacy</p>
                            </Link>
                        </div>
                        }
                    </div>
                </div>
            </div>


            <div className="dropbtn" id="hamburger-div">
                <img className="hamburger" src="/assets/burger.png" alt="Hamburger menu" />
                <div className={burgerDrop ? 'dropdown-visible my-dropdown-content' : 'dropdown-hidden my-dropdown-content'}>
                    <Link to="/" className="burger-link" onClick={linkClicked}>
                        <p className="burger-link-text link">Home</p>
                    </Link>
                    <Link to="/about" className="burger-link" onClick={linkClicked}>
                        <p className="burger-link-text link">About</p>
                    </Link>
                    <Link to="/works">
                        <p className="link burger-link-text" onClick={linkClicked}>Repertoire</p>
                    </Link>
                    <Link to="/tranzac-residency" className="burger-link" onClick={linkClicked}>
                        <p className="burger-link-text link">PEOPLE SOUP</p>
                    </Link>
                    {/* <Link to="/the-sylvan-legacy">
                        <p className="link burger-link-text" onClick={linkClicked}>The Sylvan Legacy</p>
                    </Link> */}
                    <Link to="/events">
                        <p className="link burger-link-text" onClick={linkClicked}>Events</p>
                    </Link>
                    <Link to="/press">
                        <p className="link burger-link-text" onClick={linkClicked}>Photos</p>
                    </Link>
                    <Link to="/contact">
                        <p className="link burger-link-text" onClick={linkClicked}>Contact</p>
                    </Link>
                </div>
            </div>
        </header >
    );
}

export default Header;