import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <div className="categories">
        <Link to ='/men'>Men</Link>
        <Link to ='/women'>Women</Link>
      </div>
      <h1>Contact page</h1>

    </div>
  )
}

export default Contact
