import React from "react";
// import LoginCard from "./Components/LoginCard";

import {BrowserRouter as Router} from "react-router-dom"
import AnimatedRoutes from "./Components/AnimatedRoutes";
import "./CSS/App.css"

function App() {
  return (
    <Router>
      {/* <LoginCard/> */}
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
