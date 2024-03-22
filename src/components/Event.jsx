import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Photo from "../components/Photo"
import { useState } from "react";
import "../styles/events.css"

const Event = ({ event }) => {
    return (
        <Link className="event-card" to={`/${event.url}`} >
            <div className="event-card-l">
                <h5 className="event-card-title">{event.title}</h5>
                <Photo photo={event.photo} />
                <h5 className="event-card-date">{event.date}</h5>
                <h5 className="event-card-location">{event.location}</h5>
            </div>
            <div className="event-card-r">
                {event.organizer ? <h5 className="event-card-presenter">Presented by {event.organizer}</h5> : ""}
                {event.series ? <p className="italic event-card-series">{event.series} Series</p> : ""}
                <p className="event-card-desc">{event.shortDesc}</p>
            </div>
            <p className="mobile-only click-for-more">- Tap to learn more -</p>
        </Link>
    )
}
export default Event;