import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Add_products from './Components/Addproducts'
import Signup from './Components/Signup'
import Permission from './Components/Permission'
import useAuth from './hooks/useAuth'
import Logout from './Components/Logout'
import './App.css' 
function App() {
  const {islogin} = useAuth()
  
  return (
    <>
    
     <Navbar></Navbar>

  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='logout' element={<Logout/>}/>
    <Route path='signup' element={ <Signup/>}/>
    <Route path='products' element={   islogin ?  <Products/> : <Permission/> }/>
    <Route path='addproducts' element={  islogin ? <Addproducts/>  : <Permission/> }/>
  </Routes>
    

    </>
  )
}

export default App