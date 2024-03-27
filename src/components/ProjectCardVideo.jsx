import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import "../styles/press.css"

const ProjectCardVideo = ({ project }) => {
    return (
        <Link className="project-card" to={`/${project.url}`} >
            {/* <div className="project-card"> */}
            <h5 className="project-title">{project.name}</h5>
            <div className="iframe-ctr-card">
                <img className="iframe-load-flower" src="./assets/FlowerPng.png" />
                <iframe src={project.mainvideo}></iframe>
            </div>

            <p className="project-card-desc">{project.shortDesc}</p>

            <p className="desktop-only click-for-more">- Click to learn more -</p>
            <p className="mobile-only click-for-more">- Tap to learn more -</p>
        </Link>
    )
}
export default ProjectCardVideo;