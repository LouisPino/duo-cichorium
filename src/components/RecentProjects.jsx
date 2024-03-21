import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle"
import ProjectCard from "../components/ProjectCard"
import '../styles/projects.css'
function RecentProjects({ category }) {
    const [projects, setProjects] = useState(null);
    const getProjectsData = async () => {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
    };


    useEffect(() => {
        getProjectsData();
    }, []);

    if (projects === null) {
        return <PageTitle page={"Loading"} />;
    }


    if (projects?.length) {
        const projectCards = projects.map((project) => {
            if (project.feature) {
                return <ProjectCard title={project.name} shortDesc={project.shortDesc} img={project.img} />
            }
        })
        return (
            <>
                <PageTitle page={category} />
                <div className="project-cards-ctr">
                    {projectCards}
                </div>
            </>
        )
    }
}

export default RecentProjects;
