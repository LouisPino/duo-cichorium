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
        const quotes = about.quotes.map((quote, index) => {
            // Split the quote into parts based on newline characters
            const quoteParts = quote.split('\n').map((part, partIndex) => {
                // Determine if this part is the second part
                const isSecondPart = partIndex === 1;
                // Apply a different class if this is the second part
                const partClassName = isSecondPart ? "author" : "";

                return (
                    <span key={partIndex} className={partClassName}>
                        {part}
                        {partIndex < quote.split('\n').length - 1 && <br />}
                    </span>
                );
            });

            return <h5 className="quote" key={index}>{quoteParts}</h5>;
        });

        return (
            <div className="quotes-ctr">
                {quotes}
            </div>
        );
    };
}
export default Quotes;