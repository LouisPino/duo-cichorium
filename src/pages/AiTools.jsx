
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


    const toolEls = tools?.map(function (tool, idx) {
        return (
            <div className="tools-div">
                <div className="tools-img">
                    <img className="tool-img" src={tool.img}></img>
                </div>
                <div className="tools-desc">
                    <p>{tool.desc}
                    </p>
                </div>
            </div>
        )
    }
    )



    if (tools === null) {
        return <PageTitle page={"Loading"} />;
    }


    return tools ?

        <div className="tools-body">
            <PageTitle page="Tools for Audio" />
            <PageTitle page="Tools for Video" />
            <PageTitle page="Interdisciplinary Tools" />
            {toolEls}
        </div>
        :
        <h1 className="loading-title">Loading</h1>;
}