import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ensembles from "./pages/Ensembles";
import Project from "./pages/Project";
import Press from "./pages/Press";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Tranzac from "./pages/Tranzac";
import Sylvan from "./pages/Sylvan";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ensembles" element={<Ensembles />} />
        <Route exact path="/press" element={<Press />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/the-sylvan-legacy" element={<Sylvan />} />
        <Route exact path="/tranzac-residency" element={<Tranzac />} />
        <Route path="/works/Anticommunication" element={<Project url="Anticommunication" />} />
        <Route path="/works/Elemental" element={<Project url="Elemental" />} />
        <Route path="/works/Letter" element={<Project url="Letter" />} />
        <Route path="/works/Damage" element={<Project url="Damage" />} />
        <Route path="/works/Ritual" element={<Project url="Ritual" />} />
        <Route path="/works/Grains" element={<Project url="Grains" />} />
        <Route path="/works/Fours" element={<Project url="Fours" />} />
        <Route path="/works/Dreams" element={<Project url="Dreams" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
