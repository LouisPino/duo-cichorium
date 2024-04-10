import React from 'react';
import { Link } from 'react-router-dom';
import Photo from "../components/Photo"
import "../styles/events.css"

const Event = ({ event }) => {
    return (
        <Link className="event-card" to={`/${event.url}`} >
            <div className="event-card-l">
                <Photo photo={event.photo} />
                {/* <h5 className="event-card-date">{event.date}</h5>
                <h5 className="event-card-location">{event.location}</h5> */}
            </div>
            <div className="event-card-r">
                <h5 className="">WE HAVE FRIENDS {event.number}</h5>
                <h5 className="event-card-title italic">{event.title}</h5>
                <p className="event-card-desc">{event.guests}</p>
                <p className="event-card-desc">{event.shortDesc}</p>
            </div>
            <p className="mobile-only click-for-more">- Tap to learn more -</p>
        </Link>
    )
}
export default Event;