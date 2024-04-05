
import HomeHero from "../components/HomeHero"
import FlowerKaboom from "../components/FlowerKaboom";
import RecentProjects from "../components/RecentProjects"
import "../styles/home.css"

export default function Home({ burgerDrop, setBurgerDrop, workDrop, setWorkDrop }) {
    return (
        <>
            <FlowerKaboom x="1vw" y="100px" flower="0" size={150} instance={0}/>
            <FlowerKaboom x="calc(95vw - 100px)" y="70vh" flower="1" size={125} instance={1}/>
            <FlowerKaboom x="calc(90vw - 100px)" y="80vh" flower="2" size={100} instance={2}/>
            <HomeHero burgerDrop={burgerDrop} setBurgerDrop={setBurgerDrop} workDrop={workDrop} setWorkDrop={setWorkDrop} />
            <hr />
            <RecentProjects category="Featured Work" />
        </>
    )
}