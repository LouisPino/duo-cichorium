import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlowerKaboom from "./components/FlowerKaboom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Press from "./pages/Press";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Tranzac from "./pages/Tranzac";
import Events from "./pages/Events";
import Sylvan from "./pages/Sylvan";
import EventPage from "./pages/EventPage";
import Subscribed from "./pages/Subscribed";
import _404 from "./pages/_404.jsx";
function App() {
  const [burgerDrop, setBurgerDrop] = useState(false)
  const [workDrop, setWorkDrop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const kaboomEls = document.querySelectorAll(".kaboom")
    kaboomEls.forEach((el) => {
      el.style.top = `${(Math.floor(Math.random() * 90) + 5)}%`
      el.style.left = `${(Math.floor(Math.random() * 90) + 5)}vw`
    })
  }, [location])


  return (
    <div className="App">
      <Header burgerDrop={burgerDrop} setBurgerDrop={setBurgerDrop} workDrop={workDrop} setWorkDrop={setWorkDrop} />
      <FlowerKaboom x="2vw" y="100px" flower="0" size={150} instance={0} />
      <FlowerKaboom x="calc(95vw - 100px)" y="70vh" flower="1" size={125} instance={1} />
      <FlowerKaboom x="calc(90vw - 100px)" y="80vh" flower="2" size={100} instance={2} />
      <Routes>
        <Route exact path="/" element={<Home burgerDrop={burgerDrop} setBurgerDrop={setBurgerDrop} workDrop={workDrop} setWorkDrop={setWorkDrop} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/press" element={<Press />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/the-sylvan-legacy" element={<Sylvan />} />
        <Route exact path="/tranzac-residency" element={<Tranzac />} />
        <Route exact path="/subscribed" element={<Subscribed />} />
        <Route exact path="/Anticommunication" element={<Project url="Anticommunication" />} />
        <Route exact path="/Elemental" element={<Project url="Elemental" />} />
        <Route exact path="/Letter" element={<Project url="Letter" />} />
        <Route exact path="/Damage" element={<Project url="Damage" />} />
        <Route exact path="/Ritual" element={<Project url="Ritual" />} />
        <Route exact path="/Grains" element={<Project url="Grains" />} />
        <Route exact path="/Fours" element={<Project url="Fours" />} />
        <Route exact path="/Dreams" element={<Project url="Dreams" />} />
        <Route exact path="/ElementalConcert" element={<EventPage url="ElementalConcert" />} />
        <Route exact path="/Behaviours" element={<EventPage url="Behaviours" />} />
        <Route exact path="/PonyHAUS" element={<EventPage url="PonyHAUS" />} />
        <Route exact path="/tranzac1" element={<EventPage url="tranzac1" />} />
        <Route exact path="/tranzac2" element={<EventPage url="tranzac2" />} />
        <Route exact path="/tranzac3" element={<EventPage url="tranzac3" />} />
        <Route exact path="/tranzac4" element={<EventPage url="tranzac4" />} />
        <Route exact path="/tranzac5" element={<EventPage url="tranzac5" />} />
        <Route exact path="/tranzac6" element={<EventPage url="tranzac6" />} />
        <Route exact path="/puppetmongers" element={<EventPage url="puppetmongers" />} />
        <Route exact path="/track-could-bend" element={<EventPage url="track-could-bend" />} />
        <Route exact path="/diy-instruments" element={<EventPage url="diy-instruments" />} />
        <Route path="/*" element={<_404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
