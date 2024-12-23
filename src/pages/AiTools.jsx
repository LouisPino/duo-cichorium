
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
            <PageTitle page="Tools for Audio" />
            {toolEls?.filter((el, idx) => tools[idx].category === "audio")}
            <PageTitle page="Tools for Video" />
            {toolEls?.filter((el, idx) => tools[idx].category === "video")}
            <PageTitle page="Interdisciplinary Tools" />
            {toolEls?.filter((el, idx) => tools[idx].category === "interdisciplinary")}
        </div>
    );
    
}