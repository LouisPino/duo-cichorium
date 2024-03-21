import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import "../styles/press.css"

const ProjectCard = ({ title, shortDesc, img }) => {
    return (
        <div className="project-card">
            <h5 className="project-title">{title}</h5>
            <Link className="project-card-link" to={`/${title}`} >
                <img src={img} />
            </Link>
            <p>{shortDesc}</p>
            <Link to={`/${title}`} > <button>Learn More</button></Link>
        </div >
    )
}
export default ProjectCard;