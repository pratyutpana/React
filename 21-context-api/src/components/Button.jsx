import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme,setTheme]=useContext(ThemeDataContext)


    const ChangeTheme=()=>{
       setTheme('Dark')
    }
  return (
    <div>
      <button onClick={ChangeTheme} >
        Change Theme {theme}
        </button>
    </div>
  )
}

export default Button
