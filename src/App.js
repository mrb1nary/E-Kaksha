import React from "react";
// import LoginCard from "./Components/LoginCard";
import StudentComp from "./Components/StudentComp"
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./CSS/App.css"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<><Navbar/><StudentComp/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
