
import HomeHero from "../components/HomeHero"
import LinkPanels from "../components/LinkPanels"
import RecentProjects from "./RecentProjects"
import "../styles/home.css"

export default function Home() {
    return (
        <>
            <HomeHero />
            <hr />
            <RecentProjects category="recent" />
        </>
    )
}