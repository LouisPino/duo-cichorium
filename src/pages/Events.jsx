
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo"
import Event from "../components/Event"
import "../styles/about.css"
export default function Events() {
    const [events, setEvents] = useState(null);
    const getEventData = async () => {
        const response = await fetch("./events.json");
        const data = await response.json();
        setEvents(data);
    };
    const photo = {
        "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1708007520/cichorium/Capture_pbbox4.jpg",
        "credit": "ArrayMusic, Feb. 8, 2024",
        "title": "Speed Run"
    }

    useEffect(() => {
        getEventData();
    }, []);

    if (events === null) {
        return <PageTitle page={"Loading"} />;
    }
    return events ?

        <div className="events-body">
            <Photo photo={photo} />
            <Event event={events[1]} />
            <Event event={events[0]} />
        </div>

        :

        <h1 className="loading-title">Loading</h1>;
}