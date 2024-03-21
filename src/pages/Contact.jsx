import ContactForm from '../components/ContactForm';
import MailList from '../components/MailList';
import { useEffect } from "react"


function Contact() {
    useEffect(() => {
        const app = document.querySelector(".App");
        app.style.overflowY = "hidden"
        function handleResize() {
            if (window.innerWidth / window.innerHeight > 1.5) {
                app.style.overflowY = "visible"
            }
        }
        window.onresize = handleResize
        handleResize()
    }, [])
    return (<>
        <ContactForm />
    </>
    )
}


export default Contact