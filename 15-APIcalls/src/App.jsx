import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => {
    const respnse =  await axios.get('https://picsum.photos/id/237/200/300')
    console.log(respnse)
  }

  return (
    <div>
      <button onClick={getData}>Click me</button>
    </div>
  )
}

export default App
