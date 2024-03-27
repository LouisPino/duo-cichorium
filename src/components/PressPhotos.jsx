import React, { useEffect } from 'react';
import PageTitle from "../components/PageTitle"
import Photo from "../components/Photo"
import { useState } from "react";
import "../styles/press.css"

const PressPhotos = () => {
    const [about, setAbout] = useState(null);
    const [imgCount, setImgCount] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData();
    }, []);
    useEffect(() => {
        if (about) {
            // Preload images
            about.photos.forEach((photo) => {
                const img = new Image();
                img.src = photo.url;
                img.onload = () => {
                    setImgCount((prevCount) => prevCount + 1);
                };
            });
        }
    }, [about]);

    useEffect(() => {
        // Check if all images are loaded
        if (imgCount === about?.photos.length) {
            setLoaded(true);
        }
    }, [imgCount, about?.photos.length]);

    if (!about || !loaded) {
        return <PageTitle page="Loading" />; // Or any other loading indicator
    }

    const images = about.photos.map((photo, index) => (
        <Photo photo={photo} />
    ));

    return (
        <div className="press-photos-ctr">
            {images}
        </div>
    );
}

//     useEffect(() => {
//         if (about) {
//             if (imgCount >= about.photos.length) {
//                 setLoaded(true)
//             }
//         }
//         console.log(imgCount)
//     }, [imgCount])

//     if (about) {
//         const images = about.photos.map((photo) => {
//             return <Photo photo={photo} setImgCount={setImgCount} />
//         })

//         return (loaded ?
//             <div className="press-photos-ctr">
//                 {images}
//             </div>
//             :
//             <PageTitle page={"Loading"} />
//         );
//     }
// }
export default PressPhotos;