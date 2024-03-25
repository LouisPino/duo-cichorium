import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
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
function App() {
  const [burgerDrop, setBurgerDrop] = useState(false)
  const [workDrop, setWorkDrop] = useState(false)





  return (
    <div className="App">
      <Header burgerDrop={burgerDrop} setBurgerDrop={setBurgerDrop} workDrop={workDrop} setWorkDrop={setWorkDrop} />
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
        <Route path="/Anticommunication" element={<Project url="Anticommunication" />} />
        <Route path="/Elemental" element={<Project url="Elemental" />} />
        <Route path="/Letter" element={<Project url="Letter" />} />
        <Route path="/Damage" element={<Project url="Damage" />} />
        <Route path="/Ritual" element={<Project url="Ritual" />} />
        <Route path="/Grains" element={<Project url="Grains" />} />
        <Route path="/Fours" element={<Project url="Fours" />} />
        <Route path="/Dreams" element={<Project url="Dreams" />} />
        <Route path="/ElementalConcert" element={<EventPage url="ElementalConcert" />} />
        <Route path="/Behaviours" element={<EventPage url="Behaviours" />} />
        <Route path="/PonyHAUS" element={<EventPage url="PonyHAUS" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
