import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/header.css"
import resizeScroll from "../scripts/scrollbar.js"

function Header({ burgerDrop, setBurgerDrop, workDrop, setWorkDrop }) {


    useEffect(() => {
        const hamburgerEl = document.getElementById("hamburger-div");
        const workEl = document.querySelector(".workbtn");
        hamburgerEl.addEventListener("mouseover", () => { setBurgerDrop(true); })
        hamburgerEl.addEventListener("click", () => { toggleBurger() })
        hamburgerEl.addEventListener("mouseout", () => { if (burgerDrop) setBurgerDrop(false); })
        workEl.addEventListener("mouseover", () => { setWorkDrop(true) })
        workEl.addEventListener("mouseout", () => { setWorkDrop(false) })
    }, [])

    function linkClicked() {
        setBurgerDrop(false)
        setWorkDrop(false)
    }
    function toggleBurger() {
        setBurgerDrop((prevBurgerDrop) => (!prevBurgerDrop))
    }

    window.addEventListener('resize', handleResize)
    function handleResize() {
        if (window.innerWidth > 700 && burgerDrop === true) {
            setBurgerDrop(false)
        } else if (window.innerWidth < 700 && workDrop === true) {
            setWorkDrop(false)
        }
        resizeScroll()
    }

    return (
        <header>
            <div id="progressbar"></div>
            <div id="scrollpath"></div>
            <div className="header-content">
                <Link className="Link" to="/">
                    <img className="cic-logo" src="assets/CicLogo.jpg" alt="img1"></img>
                </Link>

                <div className="my-nav">
                    <Link to="/about">
                        <p className="link nav-btn-text" onClick={linkClicked}>About</p>
                    </Link>
                    <Link to="/works">
                        <p className="link nav-btn-text" onClick={linkClicked}>Repertoire</p>
                    </Link>
                    {/* <Link to="/tranzac-residency">
                        <p className="link nav-btn-text" onClick={linkClicked}>TRANZAC Residency</p>
                    </Link> */}
                    <Link to="/the-sylvan-legacy">
                        <p className="link nav-btn-text" onClick={linkClicked}>The Sylvan Legacy</p>
                    </Link>
                    <Link to="/events">
                        <p className="link nav-btn-text" onClick={linkClicked}>Events</p>
                    </Link>
                    <div className='workbtn'>
                        <p className="nav-btn-text">Current Projects</p>
                        {workDrop && <div className="work-content">
                            {/* <Link to="/tranzac-residency">
                                <p className="link nav-btn-text" onClick={linkClicked}>TRANZAC Residency</p>
                            </Link> */}
                            <Link to="/the-sylvan-legacy">
                                <p className=" work-link-text" onClick={linkClicked}>The Sylvan Legacy</p>
                            </Link>
                        </div>
                        }
                    </div>
                    <Link to="/press">
                        <p className="link nav-btn-text" onClick={linkClicked}>Press</p>
                    </Link>
                    <Link to="/contact">
                        <p className="link nav-btn-text" onClick={linkClicked}>Contact</p>
                    </Link>
                </div>
            </div>


            <div className="dropbtn" id="hamburger-div">
                <img className="hamburger" src="/assets/burger.png" alt="img1" />
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
                    {/* <Link to="/tranzac-residency" className="burger-link" onClick={linkClicked}>
                        <p className="burger-link-text link">TRANZAC Residency</p>
                    </Link> */}
                    <Link to="/the-sylvan-legacy">
                        <p className="link burger-link-text" onClick={linkClicked}>The Sylvan Legacy</p>
                    </Link>
                    <Link to="/events">
                        <p className="link burger-link-text" onClick={linkClicked}>Events</p>
                    </Link>
                    <Link to="/press">
                        <p className="link burger-link-text" onClick={linkClicked}>Press</p>
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