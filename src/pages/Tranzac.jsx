import "../styles/tranzac.css"
import Photo from "../components/Photo.jsx"

export default function Tranzac() {
    const photo = {
        "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1711046496/cichorium/carousel/carousel1_lrvy2z.jpg",
        "credit": "ArrayMusic, Feb. 8, 2024",
        "title": "Speed Run"
    }



    return (
        <div className="tranzac-page">
            <Photo photo={photo} />
            <h4 className="tranzac-p">We will be one of the ensembles in residence at The TRANZAC Club from May to October 2024 </h4>
            <h4 className="tranzac-p">Stay tuned for updates and  videos for the upcoming season!!!</h4>
        </div>


    )
}