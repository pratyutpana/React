import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
       <p>Sheryians</p>
      <div className="links">

        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/courses'>Courses</Link>
        <Link to ='/product'>Product</Link>
        
        
        
      </div>
    </div>
  )
}

export default Navbar
