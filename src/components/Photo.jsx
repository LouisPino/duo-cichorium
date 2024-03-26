import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

export default function Photo({ photo, carousel }) {
    const location = useLocation()
    useEffect(() => {
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems);
    }, [])

    return (
        <div className={carousel ? "img-ctr carousel-item" : "img-ctr"}>
            <img src={photo.url} className={carousel ? "carousel-photo" : `press-photo ${location.pathname === "/press" ? "materialboxed" : ""}`} alt="img1" />
            <p className='photo-credit'>{photo.title && <span style={{ fontStyle: "italic" }}>{photo.title}, </span>}{photo.credit}</p>
        </div >
    )

}

