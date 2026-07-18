import React from 'react'

const App = () => {
  
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("form submitted")


  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="  " placeholder='enter your name'></input>
        <button>submit</button>
      </form>
    </div>
  )
}


export default App
