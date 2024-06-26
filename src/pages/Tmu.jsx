import PageTitle from "../components/PageTitle";
import Photo from "../components/Photo";
import "../styles/tmu.css"


export default function Tmu() {
    return (
        <>
            <PageTitle page="AI Tools for Artists" />
            <div className="tmu-main">
                <h4 className="center-text">We will be leading an exploratory course at Toronto Metropolitan University meant to increase artists' accesibility to non-generative AI tools for art making. We will be continuing to compile resources and post demonstrations on this page over the next year.</h4>
                <div className="moon tmu-project">
                    <h1>Computer Vision Moon Resizing and Sorting</h1>
                    <div className="iframe-ctr">
                        <iframe src="https://www.youtube.com/embed/XJ0QcLnkgIw"></iframe>
                    </div>
                    <h5>Over many months, Jasmine has been taking photos of the moon every night. In order to crop and resize these photos to a standard size, we are using computer vision via OpenCV's Python library to find the moon in each image and crop a square around it. We are then using computer vision to determine how full the moon is, and then sort the images by fullness. Computer vision allows us to process hundreds of photos at once, which would otherwise take hours upon hours to do manually. The max patch above is used to quickly jump through and display each image in order.</h5>
                </div>
                <h4 className="center-text">Many thanks to the Toronto Arts Council for funding this project through the Digital Solutions Incubator program!</h4>
                <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1719412705/images_y6yzjq.png" width="200px" />
            </div>
        </>


    )
}