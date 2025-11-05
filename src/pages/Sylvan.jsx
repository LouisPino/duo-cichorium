import { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import "../styles/sylvan.css"
import { Link } from "react-router-dom";

export default function Sylvan() {
    let iframeContent
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === " ") {
                console.log("Key pressed:", e);
                e.preventDefault();
            }
        };

        iframeContent?.addEventListener("keydown", handleKeyDown);
        // Cleanup the listener on unmount
        return () => iframeContent?.removeEventListener("keydown", handleKeyDown);
    }, []);


    function preventArrows(evt) {
        console.log(evt)
        const el = document.querySelector("#game-iframe")
        console.log(el)
        el.addEventListener("keydown", (e) => {
            console.log(e)
        })
    }



    useEffect(() => {
        const handleMessage = (event) => {
            // Optionally, check event.origin for security
            if (event.data.type === 'iframe-keydown') {
                if (event.data.key === "ArrowUp" || event.data.key === "ArrowDown" || event.data.key === " ") {
                    console.log(event.data.key)
                    event.preventDefault()

                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);


    return (
        <>
            {/* <PageTitle page="The Sylvan Legacy" /> */}
            <div className="sylvan-entry">
                <h5 className="center-text"> Watch The Sylvan Legacy!</h5>
                <div className="iframe-ctr sylvan-iframe-ctr"><iframe src="https://www.youtube.com/embed/upiCu-sOIZY" frameborder="0"></iframe></div>
            </div>

            <div className="sylvan-entry" tabIndex="0">
                <h5 className="center-text"> Play Sylvan Dash!!!!</h5>
                <iframe onLoad={preventArrows} src="https://louispino.github.io/sylvan-dash/" id="game-iframe" tabindex="0"></iframe>
            </div>
            <img className="sylvan-gif" src="https://res.cloudinary.com/dsvcyich1/image/upload/v1743883651/Promo_gif_zav6ci.gif" />

            <div className="sylvan-entry sylvan-images-div">
                <div className="sylvan-images">
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1751923838/DSC07715_xmxqz2.jpg" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1751926827/Screenshot_2025-07-07_182015_ymzbls.png" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1751926743/Screenshot_2025-07-07_181730_mxzzt7.png" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1751926743/Screenshot_2025-07-07_181651_yxukv7.png" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1751926743/Screenshot_2025-07-07_181831_pjph5n.png" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1751927215/Screenshot_2025-07-07_182634_asddnk.png" }} />

                </div>
            </div >

            <h2 className="center-text">Benchmark updates from development</h2>

            <div className="sylvan-entry">
                <h5 className="center-text"> Developing a system to trigger text, audio, image, and video changes.</h5>
                <div className="iframe-ctr sylvan-iframe-ctr"><iframe src="https://www.youtube.com/embed/0_M-LMbkIPQ" frameborder="0"></iframe></div>
            </div>
            <div className="sylvan-entry sylvan-images-div">
                <h5 className="center-text"> Map and environment sketches </h5>
                <div className="sylvan-images">
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1739310614/Beach_to_Ocean_Jan17_ics5zm.png" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1739310612/Cloud_to_Space_Jan17_zk7d43.png" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1739310612/Sylvan_world_map_Jan17_ggl3mh.png" }} />
                    <Photo photo={{ url: "https://res.cloudinary.com/dsvcyich1/image/upload/v1739310611/Cave_map_Jan17_q9pwwq.png" }} />
                </div>
                {/* <div className="sylvan-images">
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310614/Beach_to_Ocean_Jan17_ics5zm.png"></img>
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310612/Cloud_to_Space_Jan17_zk7d43.png"></img>
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310612/Sylvan_world_map_Jan17_ggl3mh.png"></img>
                    <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1739310611/Cave_map_Jan17_q9pwwq.png"></img>
                </div> */}
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
