import React, { useState } from 'react'
import { useFormState } from 'react-dom'

const App = () => {
  const [num , setNum] = useState([10,20,30])

  const btnClicked=()=>{
    const newNum=[...num]
    newNum.push(99)
    setNum(newNum)

  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick ={btnClicked}>Click me</button>
      
    </div>
  )
}

export default App