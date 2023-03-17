import { Screen1, Screen2 } from "screens";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
      </Routes>
    </div>
  );
}

export default App;
