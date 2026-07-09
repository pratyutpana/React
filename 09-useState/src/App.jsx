import React, { useState } from 'react'

const App = () => {

  const [count , setcount]=useState(0)
  function Increase(){
    setcount(count+5)
  }
  function Decrease(){
    setcount(count-5)
  }

 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App
