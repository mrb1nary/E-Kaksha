import React from "react";
import LoginCard from "./Components/LoginCard";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Credits from "./Components/Credits";
import Navbar from "./Components/Navbar";
import StudentComp from "./Components/StudentComp";
import SubUnit from "./Components/SubUnit";
import "./CSS/App.css"
import Register from "./Components/Register";
import Error from "./Components/Error";

function App() {
  return (
    <Router>
      
      <Routes>

        <Route exact path="/" element={<><Navbar/><StudentComp/></>} />

        <Route exact path="/login" element={<LoginCard /> } />

        <Route exact path="/register" element={<Register/>} />

        <Route exact path="/credits" element={<Credits />} />

        <Route exact path="/SubUnit" element={<><Navbar/><SubUnit/></>} />

        <Route path ="*" element={<Error/>} />

      </Routes>
    </Router>
  );
}

export default App;
