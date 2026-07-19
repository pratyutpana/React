import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()

  return (
    <div>
      <button className='btn' onClick={()=>{
        navigate('/')
      }}>
        Return to Home Page
        </button>
        <button className='btn' onClick={()=>{
        navigate(-1)
      }}>
        Back
        </button>
        <button className='btn' onClick={()=>{
        navigate(+1)
      }}>
        Next
        </button>
    </div>
  )
}

export default Navbar2
