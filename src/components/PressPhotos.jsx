import React, { useEffect, useState } from 'react';
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import "../styles/press.css";

const PressPhotos = () => {
    const [about, setAbout] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});
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
        const preloadImages = () => {
            if (about) {
                about.photos.forEach((photo) => {
                    loadPhoto(photo.url);
                });
            }
        };

        preloadImages();
    }, [about]);

    const loadPhoto = (url, retry = 3) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setLoadedImages((prev) => ({ ...prev, [url]: true }));
        };
        img.onerror = () => {
            if (retry > 0) {
                setTimeout(() => loadPhoto(url, retry - 1), 1000);
            }
        };
    };

    useEffect(() => {
        // Check if all images are loaded
        if (about && about.photos.every((photo) => loadedImages[photo.url])) {
            setLoaded(true);
        }
    }, [loadedImages, about]);

    if (!about || !loaded) {
        return <PageTitle page="Loading" />; // Or any other loading indicator
    }

    const images = about.photos.map((photo, index) => (
        <Photo key={index} photo={photo} materialbox={true} />
    ));

    return (
        <div className="press-photos-ctr">
            {images}
        </div>
    );
};

export default PressPhotos;
