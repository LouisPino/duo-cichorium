import "../styles/tranzac.css"
import Photo from "../components/Photo.jsx"
import {useState, useEffect } from "react";
import {Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

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
        <Link to={`/${concert.url}`}>
        <h4 className="tranzac-p tranzac-event-line">{concert.title} <br />{concert.date} <br/>Featuring {concert.guests}</h4>
        </Link>
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