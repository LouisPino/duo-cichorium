import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard"
import ProjectCardVideo from "../components/ProjectCardVideo"
import { useEffect, useState } from "react";

export default function Works() {
    const [projects, setProjects] = useState(null);
    const getProjectData = async () => {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        getProjectData();
    }, []);

    if (projects === null) {
        return <PageTitle page={"Loading"} />;
    } else {
        const projectCards = projects.map((project) => {
            return <ProjectCardVideo project={project} />
        })
        return (<>
            <PageTitle page={"Repertoire"} />
            <div className="project-cards-ctr">
                {projectCards}
            </div>
        </>
        )
    }
}