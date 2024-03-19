
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
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
            <p className="bio">
                <span className="here bio-name">{about.name}</span>{about.bio}
            </p>
            <a href="./assets/Jasmine_Tsui_CV_2024.pdf" target="_blank"> <button className="cv-btn">Download CV</button></a>
        </div>

        :

        <h1 className="loading-title"></h1>;
}