import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import SecondaryVideos from "../components/SecondaryVideos";
import "../styles/about.css"
export default function Project({ url }) {
    const [project, setProject] = useState(null);
    const getProjectData = async () => {
        const response = await fetch("../projects.json");
        const data = await response.json();
        setProject(data.filter((obj) => obj.url === url)[0]);
        console.log()
    };

    useEffect(() => {
        getProjectData();
    }, []);

    if (project === null) {
        return <PageTitle page={"Loading"} />;
    }
    return (
        <div className="project-page">
            <PageTitle page={project.name} />
            <div className="iframe-ctr">
                <iframe src={project.mainvideo} title={project.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h5 className="project-desc">{project.desc}</h5>
            {project.secondaryVideos && <SecondaryVideos project={project} />}
        </div>
    )
}