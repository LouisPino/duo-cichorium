
import { useEffect, useState, useRef } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo"

export default function About() {
    const [about, setAbout] = useState(null);
    const [hatIdx, setHatIdx] = useState(0);


    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    const hatImgs = [
        "blank", 
        "about1",
        "about2",
        "about3",
        "about4",
        "about5",
        "about6",
        "about7",
        "about8",
        "about9",
        "about10",
        "about11",
        "about12",
        "about13",
        "about14",
        "about15",
        
    ]

    useEffect(() => {
        getAboutData();
    }, []);

    useEffect(() => {
        if (hatIdx) {
            const overlayImgEl = document.querySelector(".overlay-img");
            overlayImgEl.src = `./assets/hair/${hatImgs[hatIdx]}.png`; // Update the image source
        }
    }, [hatIdx])

    function incHair() {
        const overlayImgEl = document.querySelector(".overlay-img");
        overlayImgEl.classList.remove("slide-in-reverse"); // Slide in
        overlayImgEl.classList.remove("slide-in"); // Slide in
        overlayImgEl.classList.add("slide-out-reverse"); // Slide in
        overlayImgEl.addEventListener('animationend', () => {
            setHatIdx((prevHatIdx) => {
                console.log(prevHatIdx)
                return (prevHatIdx + 1) % hatImgs.length
            })
            overlayImgEl.classList.remove("slide-out-reverse");
            overlayImgEl.classList.remove("slide-out");
            overlayImgEl.classList.add("slide-in-reverse"); // Slide in
        }, { once: true });

    }

    function decHair() {
        const overlayImgEl = document.querySelector(".overlay-img");
        overlayImgEl.classList.remove("slide-in"); // Prepare for slide in
        overlayImgEl.classList.remove("slide-in-reverse"); // Ensure reverse slide-in class is removed
        // Start slide out
        overlayImgEl.classList.add("slide-out"); // Start sliding out
        overlayImgEl.addEventListener('animationend', () => {
            // Correctly decrement the hat index
            setHatIdx((prevHatIdx) => (prevHatIdx - 1 >= 0 ? prevHatIdx - 1 : hatImgs.length - 1)
            );
            overlayImgEl.classList.remove("slide-out");
            overlayImgEl.classList.remove("slide-out-reverse");
            overlayImgEl.classList.add("slide-in"); // Prepare for slide in
        }
            , { once: true });
    }



    const hatImgEls = hatImgs.map((img) => {
        return <img className="overlay-img" src={`./assets/hair/${img}.png`} />
    })




    if (about === null) {
        return <PageTitle page={"Loading"} />;
    }
    return about ?

        <div className="bio-body">
            <div className="overlay-ctr">
                <img className="about-photo-arrow arrow-l" onClick={decHair} src="./assets/Arrows.png" />
                <Photo photo={about.photos[1]} />
                <img className="about-photo-arrow" onClick={incHair} src="./assets/Arrows.png"/>
                {hatImgEls[hatIdx]}
            </div>
            <p className="bio">
                {/* <span className="glow font700 bio-name">{about.name}</span> */}
                {about.bio}
            </p>
        </div>

        :

        <h1 className="loading-title">Loading</h1>;
}