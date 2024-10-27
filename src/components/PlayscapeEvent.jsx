import React from 'react';
import { Link } from 'react-router-dom';
import Photo from "../components/Photo"
import "../styles/events.css"

const Event = ({ event }) => {
    return (
        <Link className="playscape-event-card" to={`/${event.url}`} >
            <div className="playscape-event-card-top">
                <h5 className="event-card-title glow">{event.title}</h5>
            </div>


            <div className="playscape-event-card-middle">
                <div className="playscape-event-card-l">
                    <Photo photo={event.photo} />
                </div>
                <p className="event-card-desc">{event.shortDesc}</p>
            </div>


            <div className="playscape-event-card-bottom">
                {<h4 className="">{event.guests ? event.guests : "GUEST ARTSISTS TBD"}</h4>}
                <h6 className="event-card-desc">{event.desc}</h6>
                <h5 className="event-card-date">{event.date}</h5>
                <h5 className="event-card-location">{event.location}</h5>
            </div>
            <p className="mobile-only click-for-more">- Tap to learn more -</p>
        </Link>
    )
}
export default Event;