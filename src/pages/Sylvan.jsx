import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import "../styles/sylvan.css"



export default function Sylvan() {
    return (
        <>
            <PageTitle page="The Sylvan Legacy" />
            <h4 className="center-text">Stay tuned for updates on our upcoming audience interactive Choose-Your-Own-Adventure multimedia piece!</h4>
          
          
            <div className="sylvan-entry">
            <h5 className="center-text">Check out this demonstration of some of the preliminary interactive elements of the piece!</h5>
            <div className="iframe-ctr"><iframe src="https://www.youtube.com/embed/gYSEOw8xKlo" frameborder="0"></iframe></div>
           </div>
            <div className="sylvan-entry">
                <h5 className="center-text">Getting started on animation and character design!</h5>
                <div className=" iframe-ctr">
                    <iframe src={"https://youtube.com/embed/VwIg59Vlm1s"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="funders-imgs sylvan-entry">
                <h5 className="center-text ">This project is produced with the support of the City of Toronto through Toronto Arts Council.</h5>
                <img className="funders-img" src="https://res.cloudinary.com/dsvcyich1/image/upload/v1719412705/images_y6yzjq.png" width="200px" />
            </div>
        </>


    )
}
