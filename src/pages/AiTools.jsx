
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo"
import Event from "../components/Event"
import "../styles/tools.css"
export default function AITools() {
    const [tools, setTools] = useState(null);
    const getEventData = async () => {
        const response = await fetch("./aitools.json");
        const data = await response.json();
        setTools(data);
    };
    const photo = {
        "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1708007520/cichorium/Capture_pbbox4.jpg",
        "credit": "ArrayMusic, Feb. 8, 2024",
        "title": "Speed Run"
    }

    useEffect(() => {
        getEventData();
    }, []);

    if (tools === null) {
        return <PageTitle page={"Loading"} />;
    }
    return tools ?

        <div className="tools-body">
            <Photo photo={photo} materialbox={true} />
            <PageTitle page="Tools for Audio" />
            <PageTitle page="Tools for Video" />
            <PageTitle page="Interdisciplinary Tools" />

        </div>

        :

        <h1 className="loading-title">Loading</h1>;
}