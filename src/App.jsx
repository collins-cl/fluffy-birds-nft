import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Welcome from "./Pages/WelcomePage/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
