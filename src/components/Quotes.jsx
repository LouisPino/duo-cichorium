import React, { useEffect } from 'react';
import { useState } from "react";
import "../styles/press.css"

const Quotes = () => {
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData();
    }, []);



    if (about) {
        const quotes = about.quotes.map((quote) => {
            return <h5 className="quote">{quote}</h5>
        })


        return (
            <div className="quotes-ctr">
                {quotes}
            </div>
        );
    };
}
export default Quotes;