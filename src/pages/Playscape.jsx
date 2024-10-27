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
            <h5 className="playscape-p"><span className="glow">OF DANCES AND DREAMS</span> explores the surreal nature of existence through choreography in Angela Blumberg's The Great Dream, followed by an improvised dance and music set featuring Duo Cichorium and the ensemble Teething. <span className="glow">ARCADE-PALOOZA</span> merges gaming with live music, with sets by Toronto gaming and music ensemble Render File, culminating in the premiere of Duo Cichorium’s interactive multimedia work, The Sylvan Legacy. <span className="glow">THEATRICS</span> showcases theatrical chamber music with Rzewski's Fall of the Empire and the premiere of Domenic Clarke's Adore, concluding with Raymond Luedeke's whimsical Garbage Delight featuring Hee-Soo Yoon and the Toronto Saxophone Collective. <span className="glow">PAINT, PLAY</span> focuses on improvisation driven by visual art, including Duo Cichorium’s Canvas Conductor and interactive installations, featuring the work of Constant Yen, Rowan Campbell, and the duo’s own Jasmine Tsui. <span className="glow">PUPPET ZONE</span> highlights the collaboration between puppetry and music, featuring Mabel Wonnacott's Paper Man and the premiere of Cheyenne McLean and Mark Terrett’s Puppet Musical with live foley and music by Duo Cichorium and guest musicians. Finally, <span className="glow">POETRY GALACTICA</span> presents co-creations between Duo Cichorium and two Toronto-based poets, including a poetry play by Nicci Pryce and poetry opera by Nevada-Jane Arlow, blending theatrical narratives, structured improvisation, and poetic expression.</h5>
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