import React, { useEffect, useState, useRef } from 'react';

export default function Photo({ photo, carousel }) {

    return (
        <div className={carousel ? "img-ctr carousel-item" : "img-ctr"}>
            <img src={photo.url} className={carousel ? "carousel-photo" : "press-photo"} alt="img1" />
            <p className='photo-credit'>{photo.title && <span style={{ fontStyle: "italic" }}>{photo.title}, </span>}{photo.credit}</p>
        </div >
    )

}

