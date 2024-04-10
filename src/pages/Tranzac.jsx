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
        <TranzacEvent event={concert}>
        <h4 className="tranzac-p tranzac-event-line">{concert.title} <br />{concert.date} <br/>Featuring {concert.guests}</h4>
        </TranzacEvent>
        )
    })
    

    return (
        <div className="tranzac-page">
            <Photo photo={photo} />
            <h4 className="tranzac-p">PERFORMANCE SCHEDULE</h4>
            {tranzacEvents}
        </div>


    )
}
}