import React from 'react'
import "./App.css"
import { Routes , Route } from "react-router-dom";
import Navigator from './Components/Navigation/Navigator';
function App() {
  return (
      <div className="App-header">  
        <Routes>
            <Route path="/" element={<Navigator />} />
        </Routes>
    </div>
  
  
  )
}

export default App