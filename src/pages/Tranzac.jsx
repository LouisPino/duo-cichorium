import "../styles/tranzac.css"
import Photo from "../components/Photo.jsx"
import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import TranzacEvent from "../components/TranzacEvent";

export default function Tranzac() {
    const [tranzac, setTranzac] = useState(null);

    const getTranzacData = async () => {
        const response = await fetch("./tranzac.json");
        const data = await response.json();
        setTranzac(data);
    };


    useEffect(() => {
        getTranzacData();
    }, []);

    const photo = {
        "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1712878303/DC_people_soup_banner_qhb9b1.png",
        "credit": "",
        "title": ""
    }


    if (tranzac === null) {
        return <PageTitle page={"Loading"} />;
    } else {
        const tranzacEvents = tranzac.map((concert) => {
            return (
                <TranzacEvent event={concert} />
            )
        })


        return (
            <div className="tranzac-page">
                <Photo photo={photo} materialbox={true} />
                <h5 className="tranzac-p">We were artists in residence at Toronto's tranzac Club From April to October 2024, preseenting six concerts featuring a wide array of artists from varying disciplines. Check out videos and audio from our  <span className="glow">PEOPLE SOUP</ span> shows!!!!</h5>
                {/* <h5 className="tranzac-p">Get ready to <em className="glow">collaborate</ em>.</h5> */}
                {/* <PageTitle page="Upcoming Soups" /> */}
                {/* <PageTitle page="Spoiled Soups" /> */}
                <TranzacEvent event={tranzac[6]} />
                <TranzacEvent event={tranzac[5]} />
                <TranzacEvent event={tranzac[4]} />
                <TranzacEvent event={tranzac[3]} />
                <TranzacEvent event={tranzac[2]} />
                <TranzacEvent event={tranzac[1]} />
                <TranzacEvent event={tranzac[0]} />


            </div>


        )
    }
}