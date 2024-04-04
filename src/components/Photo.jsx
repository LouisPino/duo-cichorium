import { useLocation } from 'react-router-dom';
import M from "materialize-css";
import {useEffect } from "react"


export default function Photo({ photo, carousel }) {
    const location = useLocation()
    useEffect(() => {
        var elems = document.querySelectorAll(".materialboxed");
        M.Materialbox.init(elems);
      }, []);
    return (
        <div className={carousel ? "img-ctr carousel-item" : "img-ctr"}>
            <img src={photo.url} className={carousel ? "carousel-photo" : `press-photo ${location.pathname === "/press" ? "materialboxed" : ""}`} alt={photo.imgAlt} />
            <p className='photo-credit'>{photo.title && <span style={{ fontStyle: "italic" }}>{photo.title}, </span>}{photo.credit}</p>
        </div >
    )

}

