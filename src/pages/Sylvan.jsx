import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import "../styles/sylvan.css"



export default function Sylvan() {
    return (
        <>
            <PageTitle page="The Sylvan Legacy" />
            <h4 className="center-text">Stay tuned for updates on our upcoming audience interactive Choose-Your-Own-Adventure multimedia piece!</h4>
            <div className="sylvan-entry">
                <div className=" iframe-ctr">
                    <iframe src={"https://youtube.com/embed/VwIg59Vlm1s"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <h5 className="center-text">Getting started on animation and character design!</h5>
            </div>
            {/* <h3 className="center-text sylvan-entry">We are delighted to be joined by lighting designer <a className="glow" href="http://www.billywong.asia/" target="_blank">Billy Wong</a> and spatial sound designer <a className="glow" href="https://www.instagram.com/fish_sh_0111/" target="_blank">Fish Yu</a> for this performance!</h3> */}
            <div className="funders-imgs sylvan-entry">
                <h5 className="center-text ">This project is produced with the support of the City of Toronto through Toronto Arts Council.</h5>
                <img className="funders-img" src="https://res.cloudinary.com/dsvcyich1/image/upload/v1719412705/images_y6yzjq.png" width="200px" />
            </div>
        </>


    )
}