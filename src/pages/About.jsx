
import { useEffect, useState, useRef } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo"
import Carousel from "../components/Carousel"

export default function About() {
    const [about, setAbout] = useState(null);
    const [hatIdx, setHatIdx] = useState(0);
    const [carouselIdx, setCarouselIdx] = useState(0);
    const carouselTimer = useRef(null); // Use useRef for persistent mutable storage
    const carouselInstance = useRef(null); // Mutable reference for instances

    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    const hatImgs = ["blank", "hats", "saiyans"]

    useEffect(() => {
        getAboutData();
        const overlayCtrEl = document.querySelector(".overlay-ctr")
        const overlayImgEl = document.querySelector(".overlay-img")
        // if (overlayCtrEl && overlayImgEl) {
        //     overlayCtrEl.addEventListener("mouseover", () => { overlayImgEl.style.top = 0 })
        //     overlayCtrEl.addEventListener("mouseout", () => { overlayImgEl.style.top = "-0%" })
        // }

    }, [about]);

    function incHair() {
        const overlayImgEl = document.querySelector(".overlay-img")
        overlayImgEl.classList.add("left-slide-out")
        setHatIdx((prevHatIdx) => ((prevHatIdx + 1) % hatImgs.length))
    }
    function decHair() {
        const overlayImgEl = document.querySelector(".overlay-img")
        overlayImgEl.classList.add("left-slide-out")
        setHatIdx((prevHatIdx) => ((prevHatIdx - 1) % hatImgs.length >= 0 ? (prevHatIdx - 1) % hatImgs.length : hatImgs.length - 1))
    }



    if (about === null) {
        return <PageTitle page={"Loading"} />;
    }
    return about ?

        <div className="bio-body">
            <div className="overlay-ctr">
                <img className="about-photo-arrow" onClick={decHair} src="./assets/FlowerPng.png" />
                <Photo photo={about.photos[1]} />
                <img className="about-photo-arrow" onClick={incHair} src={`./assets/FlowerPng.png`} />
                <img className="overlay-img" src={`./assets/hair/${hatImgs[hatIdx]}.png`} />
            </div>
            <p className="bio">
                <span className="glow font700 bio-name">{about.name}</span>{about.bio}
            </p>
        </div>

        :

        <h1 className="loading-title">Loading</h1>;
}