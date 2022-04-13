import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import AbbreviateName from "./Components/AbbreviateName";
import CapitalizeName from "./Components/CapitalizeName";
import DecimalToBinary from "./Components/DecimalToBinary";
import EvaluateMath from "./Components/EvaluateMath";
import RollDice from "./Components/RollDice";
import SwapiFetch from "./Components/SwapiFetch";
import Truncate from "./Components/Truncate";

import "./Styles/Main.scss"


function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <Link className="link" to="/capitalize">Capitalize Name</Link>
          <Link className="link" to="/abbreviate">Abbreviate Name</Link>
          <Link className="link" to="/truncate">Truncate</Link>
          <Link className="link" to="/evaluate">Evaluate Expression</Link>
          <Link className="link" to="/decimal-to-binary">Decimal to Binary</Link>
          <Link className="link" to="/star-wars">Star Wars</Link>
          <Link className="link" to="/dice">Roll a die</Link>
        </div>
          <Routes>
            <Route path="/" />
            <Route path="/capitalize" element={<CapitalizeName />}/>
            <Route path="/abbreviate" element={<AbbreviateName />}/>
            <Route path="/truncate" element={<Truncate />} />
            <Route path="/evaluate" element={<EvaluateMath />} />
            <Route path="/decimal-to-binary" element={<DecimalToBinary />} />
            <Route path="/star-wars" element={<SwapiFetch />} />
            <Route path="/dice" element={<RollDice />} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;
