import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import "../styles/press.css"

const ProjectCard = ({ project }) => {
    return (
        <Link className="project-card" to={`/${project.url}`} >
            {/* <div className="project-card"> */}
            <h5 className="project-title">{project.name}</h5>
            <img src={project.img} />
            <p>{project.shortDesc}</p>
            {/* <Link to={`/${project.url}`} > <button>Watch</button></Link> */}
            {/* </div > */}
        </Link>
    )
}
export default ProjectCard;