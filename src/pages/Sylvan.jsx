import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import "../styles/sylvan.css"



export default function Sylvan() {
    return (
        <>
            <PageTitle page="The Sylvan Legacy" />
            <h4 className="center-text">Stay tuned for updates on our upcoming audience interactive Choose-Your-Own-Adventure multimedia piece!</h4>


            <div className="sylvan-entry">
                <h5 className="center-text"> Play the Sylvan Legacy Game!!!!</h5>
                <iframe src="https://louispino.github.io/sylvan-game/" id="game-iframe"></iframe>
            </div>


            <div className="sylvan-entry">
                <h5 className="center-text"> Developing a system to trigger text, audio, image, and video changes with one click.</h5>
                <div className="iframe-ctr sylvan-iframe-ctr"><iframe src="https://drive.google.com/file/d/1CBOoOQQLp0J5zq8llb3Z8Ru3yP2u6q9l/preview" frameborder="0"></iframe></div>
            </div>
            <div className="sylvan-entry sylvan-images-div">
                <h5 className="center-text"> Map and environment sketches </h5>
                <div className="sylvan-images">
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310614/Beach_to_Ocean_Jan17_ics5zm.png"></img>
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310612/Cloud_to_Space_Jan17_zk7d43.png"></img>
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310612/Sylvan_world_map_Jan17_ggl3mh.png"></img>
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310611/Cave_map_Jan17_q9pwwq.png"></img>


                </div>
            </div >



            <div className="sylvan-entry">
                <h5 className="center-text">Check out this demonstration of some of the preliminary interactive elements of the piece!</h5>
                <div className="iframe-ctr sylvan-iframe-ctr"><iframe src="https://www.youtube.com/embed/gYSEOw8xKlo" frameborder="0"></iframe></div>
            </div>
            <div className="sylvan-entry">
                <h5 className="center-text">Getting started on animation and character design!</h5>
                <div className="iframe-ctr sylvan-iframe-ctr" >
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
