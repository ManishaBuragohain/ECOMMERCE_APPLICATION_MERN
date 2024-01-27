import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Success";
import Pay from "./Pay";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pay" element={<Pay />} />

          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
