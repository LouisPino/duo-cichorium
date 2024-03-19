import { useState } from "react";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                setSubmitted(true)
            })
            .catch((error) => alert(error));
    };


    if (submitted) {
        return (
            <>
                <div className="msg-success">THANK YOU FOR YOUR MESSAGE!<br />WE'LL GET BACK TO YOU AS SOON AS POSSIBLE.</div>
            </>
        );
    }

    return (
        <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-field">
                <label>NAME</label>

                <input
                    type="text"
                    name="name"
                    className="text-input"
                    required
                />
            </div>
            <div className="form-field">
                <label>EMAIL</label>

                <input
                    type="email"
                    name="email"
                    className="text-input"
                    required
                />
            </div>
            <div className="form-field">
                <label>MESSAGE</label>

                <textarea
                    name="message"
                    className=""
                    required
                />
            </div>
            <div className="">
                <button
                    type="submit"
                    name="button"
                    className="btn"
                >
                    SEND A MESSAGE
                </button>
            </div>
        </form>
    );
};

export default ContactForm;