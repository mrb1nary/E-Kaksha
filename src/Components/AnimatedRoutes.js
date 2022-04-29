import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import StudentComp from "./StudentComp"
import Navbar from "./Navbar";
import SubUnit from "./SubUnit"
import {AnimatePresence} from "framer-motion"


function AnimatedRoutes() {
    const location=useLocation();
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<><Navbar/><StudentComp/></>}/>
            <Route path="/SubUnit" exact element={<><Navbar/><SubUnit/></>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes