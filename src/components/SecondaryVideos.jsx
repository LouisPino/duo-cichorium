import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import PageTitle from './PageTitle';
import "../styles/press.css"

const SecondaryVideos = ({ project }) => {

    const iframes = project.secondaryVideos.map((video) => {
        return (<>
            <div className="secondary-iframe-ctr">
                <iframe src={video.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p className="project-desc secondary-caption">{video.caption}</p>
        </>
        )
    })
    return iframes
}
export default SecondaryVideos;