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
        "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1711046496/cichorium/carousel/carousel1_lrvy2z.jpg",
        "credit": "ArrayMusic, Feb. 8, 2024",
        "title": "Speed Run"
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
            <h5 className="tranzac-p">We are artists in residence at Toronto's tranzac Club until September! Join us for <em className="glow">WE ARE FRIENDS</ em>, six concerts featuring a wider aray of artists from varying disciplines.</h5>
            <h5 className="tranzac-p">Get ready to <em className="glow">collaborate</ em>.</h5>
            <PageTitle page="Upcoming Events" />
            <TranzacEvent event={tranzac[0]} />
            <TranzacEvent event={tranzac[1]} />
            <TranzacEvent event={tranzac[2]} />
            <TranzacEvent event={tranzac[3]} />
            <TranzacEvent event={tranzac[4]} />
            <TranzacEvent event={tranzac[5]} />
            {/* <PageTitle page="Past Events" /> */}


            {/* {tranzacEvents} */}
        </div>


    )
}
}