import React, { useRef, useState,useEffect } from 'react'
import axios from 'axios'
import useAuth from "../hooks/useAuth"
import { useNavigate } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader"
import { bake_cookie ,read_cookie } from 'sfcookies'
function Login() {

    const {API_URL,islogin,setIsLoogin,value, setvalue} = useAuth()
    const [loading ,setLoading] = useState(false)

    const inputName =  useRef()
    const inputPassword =  useRef()


   const navigate = useNavigate()



   




 function submit(e){
    e.preventDefault()
    setLoading(true)

  console.log(inputName.current.value);
  console.log(inputPassword.current.value);


   // axois 

   const url = API_URL + '/signin'
   const json = {
    name:inputName.current.value,
    password:inputPassword.current.value
   }

   axios.post(url,json).then((res)=>{
    console.log(res);
    setLoading(false)
    setIsLoogin(true)
    const token = res.data.token
    bake_cookie("islogin",token)
    bake_cookie("value",true)
    navigate("/products")
    

   }).catch((err)=>{
    console.log(err);
    navigate("/")  
    setLoading(false)  
    
   })



}





return (
    <>
    <br />
    <br />

    <div>
         
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{"borderradius ": "1rem"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">{loading ?  (<BeatLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> ): "Login"}</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input  ref={inputName} type="email" id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Username</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input ref={inputPassword} type="password" id="typePasswordX" className="form-control form-control-lg"  />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={(e)=>submit(e)} >Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </>
   )
}

export default Login