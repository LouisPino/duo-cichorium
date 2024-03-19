import { Route, Router, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ensembles from "./pages/Ensembles";
import Projects from "./pages/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ensembles" element={<Ensembles />} />
        <Route exact path="/percussion" element={<Projects category="percussion" />} />
        <Route exact path="/video-art" element={<Projects category="video art" />} />
        <Route exact path="/multimedia" element={<Projects category="multimedia" />} />
        <Route exact path="/compositions" element={<Projects category="compositions" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
