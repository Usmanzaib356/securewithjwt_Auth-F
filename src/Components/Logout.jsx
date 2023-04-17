import React, { useEffect } from 'react'
import { delete_cookie } from 'sfcookies'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
function Logout() {

    const  { setIsLoogin }= useAuth()
      const nav = useNavigate()
 
  useEffect(()=>{
    setIsLoogin(false)
    delete_cookie("islogin")
    delete_cookie("value")
     setTimeout(()=>{
        nav("/")
     },2000)

  },[])


  return (
    <div className='text-center text-danger mt-5  '>
        <h1>You are Logout</h1>
    </div>
  )
}

export default Logout