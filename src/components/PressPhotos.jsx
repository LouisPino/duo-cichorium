import React, { useEffect } from 'react';
import PageTitle from "../components/PageTitle"
import { useState } from "react";
import "../styles/press.css"

const PressPhotos = () => {
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData();
    }, []);



    if (about) {
        const images = about.photos.map((src) => {
            return <img className="press-photo" src={src} />
        })

        return (
            <div className="press-photos-ctr">
                {images}
            </div>
        );
    } else {
        return <PageTitle page={"Loading"} />
    }
}
export default PressPhotos;