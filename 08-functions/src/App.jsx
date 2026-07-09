import React from 'react'

const App = () => {

  function btnclicked(){
    console.log("hello")
  }
  return (
    <div>
      <button onClick={btnclicked}> click here</button>
    </div>
  )
}

export default App
