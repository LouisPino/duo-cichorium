import { useLocation } from 'react-router-dom';

export default function Photo({ photo, carousel }) {
    const location = useLocation()

    return (
        <div className={carousel ? "img-ctr carousel-item" : "img-ctr"}>
            <img src={photo.url} className={carousel ? "carousel-photo" : `press-photo ${location.pathname === "/press" ? "materialboxed" : ""}`} alt={photo.imgAlt} />
            <p className='photo-credit'>{photo.title && <span style={{ fontStyle: "italic" }}>{photo.title}, </span>}{photo.credit}</p>
        </div >
    )

}

