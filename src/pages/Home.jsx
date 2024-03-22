
import HomeHero from "../components/HomeHero"
import RecentProjects from "../components/RecentProjects"
import "../styles/home.css"

export default function Home({ burgerDrop, setBurgerDrop, workDrop, setWorkDrop }) {
    return (
        <>
            <HomeHero burgerDrop={burgerDrop} setBurgerDrop={setBurgerDrop} workDrop={workDrop} setWorkDrop={setWorkDrop} />
            <hr />
            <RecentProjects category="Featured Work" />
        </>
    )
}