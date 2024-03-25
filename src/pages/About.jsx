
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo"
import "../styles/about.css"
export default function About() {
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData();
    }, []);

    if (about === null) {
        return <PageTitle page={"Loading"} />;
    }
    return about ?

        <div className="bio-body">
            <Photo photo={about.photos[1]} />
            <p className="bio">
                <span className="glow font700 bio-name">{about.name}</span>{about.bio}
            </p>
        </div>

        :

        <h1 className="loading-title">Loading</h1>;
}