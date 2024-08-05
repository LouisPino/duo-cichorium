import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import { Link } from "react-router-dom";
import "../styles/events.css"
export default function Event({ url }) {
    const [event, setEvent] = useState(null);

    const search_url = url.includes("tranzac") ? "./tranzac.json" : "./events.json"

    const getEventData = async () => {
        const response = await fetch(search_url);
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
        console.log("hit")
        if (piece.title === "Intermission") {
            return <p className="event-page-program-intermission">- Intermission -</p>
        } else {
            return (
                <Link to={`/${piece.url}`}>
                    <p className="event-page-program-line">{piece.guests ? `${piece.title}` : piece.title} <span className="italic">{piece.composer}</span></p>
                </Link >
            )
        }
    })

    const photos = event.photos.map((photo) => {
        return (
            <Photo photo={photo} materialbox={true} />
        )
    }
    )
    const audio = event.audio_links?.map((audio_link) => {
        return (
            <><div className="iframe-ctr audio-iframe">
                <iframe src={audio_link.url}></iframe>
            </div>
                <p>{audio_link.caption}</p></>)
    }
    )

    return (
        < div className="event-page" >
            <PageTitle page={event.title} />
            <PageTitle page={event.date} />
            {
                event.recording_url ? <><div className="iframe-ctr">
                    <iframe src={event.recording_url} title={event.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                    <p className="video-caption italic">{event.video_caption}</p></>
                    :
                    <Photo photo={event.photo} materialbox={true} />
            }
            {
                event.audio_links ? audio
                    :
                    ""
            }
            {
                event.tickets &&
                <a href={`https://${event.tickets}`} target="_blank"><button>Tickets Here!</button></a>
            }
            <div className="event-page-text">
                {/* {event.guests ? <h3 className="center-text">{event.guestsPage}</h3> : ""} */}
                {event.program.length ? <h5>Program</h5> : ""}
                {programList}
                <p className="event-desc">{event.desc}</p>
                <div className="event-photos">
                    {photos}
                </div>

            </div>

        </div >
    )
}