import { Link } from "react-router-dom";
import Panel from "./Panel.jsx"

function LinkPanels() {
    return (
        <section className="panels">
            <Link className="link-comp" to="/percussion">
                <Panel title="percussion" img="assets/Mallets.png" />
            </Link>
            <Link className="link-comp" to="/video-art">
                <Panel title="video art" img="assets/FlowChart.png" />
            </Link>
            <Link className="link-comp" to="/compositions">
                <Panel title="compositions" img="assets/Fibonacci.png" />
            </Link>
            <Link className="link-comp" to="/multimedia">
                <Panel title="multimedia" img="assets/Shapes.png" />
            </Link>
        </section>
    )
}

export default LinkPanels;