import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import { Link } from "react-router-dom";
import "../styles/events.css"
export default function Event({ url }) {
    const [event, setEvent] = useState(null);
    const getEventData = async () => {
        const response = await fetch("../events.json");
        const data = await response.json();
        setEvent(data.filter((obj) => obj.url === url)[0]);
    };

    useEffect(() => {
        getEventData();
    }, []);

    if (event === null) {
        return <PageTitle page={"Loading"} />;
    }

    const programList = event.program.map((piece) => {
        if (piece.title === "Intermission") {
            return <p className="event-page-program-intermission">- Intermission -</p>
        } else {
            return (
                <Link to={`/${piece.url}`}>
                    <p className="event-page-program-line">{piece.guests ? `${piece.title}` : piece.title}, <span className="italic">{piece.composer}</span></p>
                </Link >
            )
        }
    })
    return (
        <div className="event-page">
            <PageTitle page={event.title} />
            {event.recording_url ? <div className="iframe-ctr">
                <iframe src={event.recording_url} title={event.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
                :
                <Photo photo={event.photo} />}
            <div className="event-page-text">
                {event.program.length ? <h5>Program</h5> : ""}
                {programList}
                <p className="event-desc">{event.desc}</p>
            </div>

        </div>
    )
}