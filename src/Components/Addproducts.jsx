import React, { useRef } from 'react'
import axios from 'axios'
import useAuth from "../hooks/useAuth"
function Addproducts() {


  const {API_URL} = useAuth()


     const inputName  = useRef()
     const inputPrice  = useRef()
     const inputDes = useRef()


   function add(e){
    
   e.preventDefault()
    console.log(inputName.current.value);
    console.log(inputPrice.current.value ); 
    console.log(inputDes.current.value);


    const url = API_URL + "/products_save"
    const json = {
      name: inputName.current.value,
      price:  parseInt( inputPrice.current.value),
      description: inputDes.current.value
    }
    

    axios.post(url,json).then((res)=>{

     console.log(res);

    }).catch((err)=>{
       console.log(err);
    })




   }



  return (
    <>
    <br   />
    <br />
    <div className='addcards'>
      <label htmlFor="">Name</label>
      <br />
         <input  ref={inputName} type="text" />
         <br />
         <br />
         <br />
         <label htmlFor="">Price</label>
          <br />
         <input ref={inputPrice} type="text" />
         <br />
         <br />
         <br />
         <label htmlFor="">Description</label>
          <br />
         <input ref={inputDes} type="text" />
         <br />
         <br />
         <button onClick={(e)=> add(e)}>Add</button>
    </div>
    </>
  )
}

export default Addproducts