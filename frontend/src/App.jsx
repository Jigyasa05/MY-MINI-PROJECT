import React from 'react'
import { BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Login from './components/Login'
import Signup from'./components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddSales from './components/AddSales'
import NotFound from './components/Notfound'
import BrowseSales from './components/BrowseSales'
import Details from './components/Details'


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
        <Route path='/browsesales' element={<BrowseSales/>}/>
        <Route path='/details/:id' element={<Details/>}/>

        <Route path='*' element={<NotFound />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;