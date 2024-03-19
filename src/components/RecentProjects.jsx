import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle"
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
        const projectCards = projects.map(function (project, idx) {
            if (project.categories.includes(category)) {
                const videoLinks = project.video.split(", ").map((link) => (
                    <div className="iframe-container">
                        <iframe src={link + "?modestbranding=1&autohide=1&showinfo=0&controls=1"} frameBorder="0" allowFullScreen></iframe>
                    </div>
                ))
                return (
                    <div className="project-card" id={project.name}>
                        <h1 className="project-name link">{project.name}</h1>
                        {videoLinks}
                        {project.programLink ? (
                            <div className="program">
                                <a href={`./assets/${project.programLink}`} target="_blank"> <button className="cv-btn">Download Program</button></a>
                                <h3 className="myh3" key={idx}>{project.programText}</h3>
                            </div>
                        ) : ""
                        }
                        {project.description ? (
                            <p className="project-desc" >{project.description}</p>
                        ) : ""
                        }
                    </div >
                )
            }
        }
        )


        return (
            projects.length > 0 ? <>
                <PageTitle page={category.toUpperCase()} />
                <section className="projects-body">
                    {projectCards}
                </section>
            </>
                :
                <div>No projects found in this category.</div> // Handle empty array
        );
    }
}

export default RecentProjects;
