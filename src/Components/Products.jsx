  import axios from 'axios'
  import React, { useEffect, useState } from 'react'
  import useAuth from "../hooks/useAuth"
  import {read_cookie} from "sfcookies";
  function Products() {
    const {API_URL} = useAuth()

 const [pro,setPro] = useState([])  

  const url = API_URL + "/products"

  

   
   const token = read_cookie("islogin");

   useEffect(()=>{
    axios.get(url, {
      headers: {
        x_access_token: token  
      }
    })
    .then((res) => {
      console.log(res);
      setPro(res.data)    

    })
    .catch((error) => {
      console.log(error);
    });


   },[url,token])

  

    return (
      <>
      <br />
      <br />
      <div className='cardss ms-5'>
      {pro.map((item)=>{
         return ( <div>
        <div className="cards" style={{"width": "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <h5 className="card-price">{item.price}</h5>
      <p className="card-text">{item.description}</p>
    </div>
  </div>
        </div>
    
        )
      })}
  </div>
      </>

    )
  }

  export default Products