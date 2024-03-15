import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './assets/Signup'
import Login from './assets/Login'
import {BrowserRouter ,Routes,Route,} from 'react-router-dom'
import Home from './assets/Home'


function App() {
  

  return (
     <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App
