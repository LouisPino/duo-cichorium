import React from 'react';
import { Link } from 'react-router-dom';
import Photo from "../components/Photo"
import "../styles/events.css"

const Event = ({ event }) => {
    return (
        <Link className="t-event-card" to={`/${event.url}`} >
            <div className="t-event-card-top">
                <h5 className="event-card-title glow">{event.title}</h5>
            </div>


            <div className="t-event-card-middle">
                <div className="t-event-card-l">
                <Photo photo={event.photo} />
                </div>
                <h4 className="">{event.guests}</h4>
                {/* <h5 className="">PEOPLE SOUP {event.number}</h5> */}
                <p className="event-card-desc">{event.shortDesc}</p>
            </div>


            <div className="t-event-card-bottom">
                <h5 className="event-card-date">{event.date}</h5>
                <h5 className="event-card-location">{event.location}</h5>
            </div>
            <p className="mobile-only click-for-more">- Tap to learn more -</p>
        </Link>
    )
}
export default Event;