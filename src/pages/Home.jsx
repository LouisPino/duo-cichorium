
import HomeHero from "../components/HomeHero"
import FlowerKaboom from "../components/FlowerKaboom";
import RecentProjects from "../components/RecentProjects"
import "../styles/home.css"

export default function Home({ burgerDrop, setBurgerDrop, workDrop, setWorkDrop }) {
    return (
        <>
            <FlowerKaboom x="100px" y="300px" flower="0" size={50} instance={0}/>
            <FlowerKaboom x="100px" y="100px" flower="1" size={100} instance={1}/>
            <FlowerKaboom x="100px" y="200px" flower="2" size={75} instance={2}/>
            <HomeHero burgerDrop={burgerDrop} setBurgerDrop={setBurgerDrop} workDrop={workDrop} setWorkDrop={setWorkDrop} />
            <hr />
            <RecentProjects category="Featured Work" />
        </>
    )
}