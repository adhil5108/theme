import { useState,useEffect } from 'react'

import './App.css'

function App() {
let [theme,settheme]=useState("light")

const se=()=>{
  settheme(th=>th==="light"?"dark":"light")
}

useEffect(()=>{
document.body.className=theme;
},[theme])

return(
  <>
  <div className='container'>

  <h1>Click it</h1>
  <button onClick={se}>change theme</button>
  </div>
  
  </>
)
}

export default App
