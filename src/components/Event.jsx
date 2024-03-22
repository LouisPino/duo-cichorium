import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Photo from "../components/Photo"
import { useState } from "react";
import "../styles/events.css"

const Event = ({ event }) => {
    return (
        <Link className="event-card" to={`/${event.url}`} >
            <div className="event-card-l">
                <h5 className="event-title">{event.title}</h5>
                <Photo photo={event.photo} />
                <h5 className="event-date">{event.date} {event.location}</h5>
            </div>
            <p className="event-card-desc">{event.shortDesc}</p>
            <p className="mobile-only click-for-more">- Tap to learn more -</p>
        </Link>
    )
}
export default Event;