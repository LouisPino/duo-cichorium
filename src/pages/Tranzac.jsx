import "../styles/tranzac.css"
import Photo from "../components/Photo.jsx"
import {useState, useEffect } from "react";
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
}else{
    const tranzacEvents = tranzac.map((concert)=>{
        return(
        <TranzacEvent event={concert} />
        )
    })
    

    return (
        <div className="tranzac-page">
            <Photo photo={photo} />
            <h5 className="tranzac-p">We are artists in residence at Toronto's tranzac Club until September! Join us for <span className="glow">PEOPLE SOUP</ span>, six concerts featuring a wide array of artists from varying disciplines.</h5>
            <h5 className="tranzac-p">Get ready to <em className="glow">collaborate</ em>.</h5>
            <PageTitle page="Upcoming Soups" />
            <TranzacEvent event={tranzac[0]} />
            <TranzacEvent event={tranzac[1]} />
            <TranzacEvent event={tranzac[2]} />
            <TranzacEvent event={tranzac[3]} />
            <TranzacEvent event={tranzac[4]} />
            <TranzacEvent event={tranzac[5]} />
            {/* <PageTitle page="Spoiled Soups" /> */}


        </div>


    )
}
}