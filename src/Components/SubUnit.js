import React from 'react'
import "../CSS/SubUnit.css"
import {motion} from "framer-motion"

function SubUnit() {
  return (
    <motion.div 
    className='subUnit'
    
    
    >
        <div className='sub1 sub'>Unit 1</div>
        <div className='sub2 sub'>Unit 2</div>
        <div className='sub3 sub'>Unit 3</div>
        <div className='sub4 sub'>Unit 4</div>
    </motion.div>
  )
}

export default SubUnit