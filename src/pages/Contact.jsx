import ContactForm from '../components/ContactForm';
import PageTitle from '../components/PageTitle';
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
        <PageTitle page="Email Us!" />
        <ContactForm />
    </>
    )
}


export default Contact