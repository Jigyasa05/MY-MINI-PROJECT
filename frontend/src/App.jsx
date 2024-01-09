import React from 'react'
import { BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Login from './components/Login'
import Signup from'./components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddSales from './components/AddSales'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addsales' element={<AddSales/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;