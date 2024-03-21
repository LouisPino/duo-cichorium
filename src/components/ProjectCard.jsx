import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import "../styles/press.css"

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h5 className="project-title">{project.name}</h5>
            <Link className="project-card-link" to={project.url} >
                <img src={project.img} />
            </Link>
            <p>{project.shortDesc}</p>
            <Link to={project.url} > <button>Learn More</button></Link>
        </div >
    )
}
export default ProjectCard;