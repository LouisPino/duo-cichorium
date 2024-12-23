
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import "../styles/tools.css"
export default function AITools() {
    const [tools, setTools] = useState(null);
    const getToolsData = async () => {
        const response = await fetch("./aitools.json");
        const data = await response.json();
        setTools(data);
    };

    // const photo = {
    //     "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1708007520/cichorium/Capture_pbbox4.jpg",
    //     "credit": "ArrayMusic, Feb. 8, 2024",
    //     "title": "Speed Run"
    // }

    useEffect(() => {
        getToolsData();
    }, []);


    const toolElsObj = {audio:[], video:[], interdisciplinary: []}
    
    const toolEls = tools?.map((tool) => {
        return (
            <div className="tools-div" key={tool.name}>
                <a className="tools-img" href={tool.url} target="_blank">
                <div className="">
                    <h1 className="tool-title">{tool.name}</h1>
                    <img className="tool-img" src={tool.img} alt={`${tool.name} image`} />
                </div>
                </a>
                <div className="tools-desc">
                    <p>{tool.desc}</p>
                </div>
            </div>
        );
    });
    
    if (tools === null) {
        return <PageTitle page="Loading" />;
    }
    
    return (
        <div className="tools-body">
             <PageTitle page="AI Tools for Artists" />
             <h5 className="tools-exp">In the 2024 Fall Sememster, we worked with a group of students in Toronto Metropolitan University's Design Solutions Supercourse to tackle the challenge of accessibility to AI tools for artists. On this page is a guide to help find tools that use machine learning in a way that can be useful to artists, while not generating the content themselves.</h5>
            <PageTitle page="Tools for Audio" />
            {toolEls?.filter((el, idx) => tools[idx].category === "audio")}
            <PageTitle page="Tools for Video" />
            {toolEls?.filter((el, idx) => tools[idx].category === "video")}
            <PageTitle page="Interdisciplinary Tools" />
            {toolEls?.filter((el, idx) => tools[idx].category === "interdisciplinary")}
            <PageTitle page="Examples" />
            <div className="tmu-main">
                            <div className="moon tmu-project">
                                <h1>Computer Vision Moon Resizing and Sorting</h1>
                                <div className="iframe-ctr">
                                    <iframe src="https://www.youtube.com/embed/XJ0QcLnkgIw"></iframe>
                                </div>
                                <h5>Over many months, Jasmine has been taking photos of the moon every night. In order to crop and resize these photos to a standard size, we are using computer vision via OpenCV's Python library to find the moon in each image and crop a square around it. We are then using computer vision to determine how full the moon is, and then sort the images by fullness. Computer vision allows us to process hundreds of photos at once, which would otherwise take hours upon hours to do manually. The max patch above is used to quickly jump through and display each image in order.</h5>
                            </div>
                        </div>
                            <div className="funders-imgs sylvan-entry">
                                <h5 className="center-text ">This project is produced with the support of the City of Toronto through Toronto Arts Council.</h5>
                                <img className="funders-img" src="https://res.cloudinary.com/dsvcyich1/image/upload/v1719412705/images_y6yzjq.png" width="200px" />
                            </div>
        </div>
    );
    
}