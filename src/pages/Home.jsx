
import HomeHero from "../components/HomeHero"
import RecentProjects from "../components/RecentProjects"
import "../styles/home.css"

export default function Home() {
    return (
        <>
            <HomeHero />
            <hr />
            <RecentProjects category="Featured Work" />
        </>
    )
}