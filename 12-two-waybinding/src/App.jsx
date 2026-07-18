import React, { useState } from 'react'

const App = () => {
  const [title,setTitle]=useState(" ")
  
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("form submitted by" , title)
    setTitle(" ")

  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}></input>
        <button>submit</button>
      </form>
    </div>
  )
}


export default App