import "../styles/playscape.css"
import Photo from "../components/Photo.jsx"
import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import PlayscapeEvent from "../components/PlayscapeEvent";

export default function Playscape() {
    const [playscape, setPlayscape] = useState(null);
    const getPlayscapeData = async () => {
        const response = await fetch("./playscape.json");
        const data = await response.json();
        setPlayscape(data);
    };


    useEffect(() => {
        getPlayscapeData();
    }, []);

    const photo = {
        "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1729288211/Untitled_Artwork-min_rxezfq.png",
        "credit": "",
        "title": ""
    }


    if (playscape === null) {
        return <PageTitle page={"Loading"} />;
    }

    return (
        <div className="playscape-page">
            <Photo photo={photo} materialbox={true} />
            <h5 className="playscape-p">We will curators at <span className="glow">Array Music</ span> from 2024 to 2027. Join us for <span className="glow">DUO CICHORIUM'S PLAYSCAPE EMPORIUM</ span>, six concerts featuring a wide array of artists from varying disciplines.</h5>
            <PageTitle page="Upcoming Shows" />
            <PlayscapeEvent event={playscape[0]} />
            <PlayscapeEvent event={playscape[1]} />
            <PlayscapeEvent event={playscape[2]} />
            <PlayscapeEvent event={playscape[3]} />
            <PlayscapeEvent event={playscape[4]} />
            <PlayscapeEvent event={playscape[5]} />
        </div>


    )
}