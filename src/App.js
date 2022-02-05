import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Home } from "./routes/home";
import { Rates } from "./routes/rates";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Routes>
    </div>
  );
}

export default App;
