
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo"
import "../styles/about.css"
export default function About() {
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData();
        const overlayCtrEl = document.querySelector(".overlay-ctr")
        const overlayImgEl = document.querySelector(".overlay-img")
        if (overlayCtrEl && overlayImgEl) {
            overlayCtrEl.addEventListener("mouseover", () => { overlayImgEl.style.top = 0 })
            overlayCtrEl.addEventListener("mouseout", () => { overlayImgEl.style.top = "-50%" })
        }
    }, [about]);

    if (about === null) {
        return <PageTitle page={"Loading"} />;
    }
    return about ?

        <div className="bio-body">
            <div className="overlay-ctr">
                <Photo photo={about.photos[1]} />
                <img className="overlay-img" src="./assets/hair/saiyans.png" />
            </div>
            <p className="bio">
                <span className="glow font700 bio-name">{about.name}</span>{about.bio}
            </p>
        </div>

        :

        <h1 className="loading-title">Loading</h1>;
}