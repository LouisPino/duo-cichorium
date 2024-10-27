
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
            <Photo photo={photo} materialbox={true} />
            <PageTitle page="Upcoming" />
            <Event event={events[8]} />{/*playscape*/}
            <PageTitle page="Previous" />
            <Event event={events[7]} />{/*render smash*/}
            <Event event={events[6]} />{/*DIY Instruments*/}
            <Event event={events[5]} />{/*Track Could Bend*/}
            <Event event={events[4]} />{/*Puppet Mongers*/}
            <Event event={events[3]} /> {/*Tranzac, stay at bottom*/}
            <Event event={events[2]} />{/*PonyHAUS*/}
            <Event event={events[1]} />{/*Behaviors*/}
            <Event event={events[0]} />{/*Elemental*/}
        </div>

        :

        <h1 className="loading-title">Loading</h1>;
}