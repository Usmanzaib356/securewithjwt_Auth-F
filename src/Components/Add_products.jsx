import React, { useRef } from 'react'
import axios from 'axios'
function Add_products() {


     const inputName  = useRef()
     const inputPrice  = useRef()
     const inputDes = useRef()


   function add(){

   }



  return (
    <>
    <br   />
    <br />
    <div className='addcards'>
      <label htmlFor="">Name</label>
      <br />
         <input type="text" />
         <br />
         <br />
         <br />
         <label htmlFor="">Price</label>
          <br />
         <input type="text" />
         <br />
         <br />
         <br />
         <label htmlFor="">Description</label>
          <br />
         <input type="text" />
         <br />
         <br />
         <button>Add</button>
    </div>
    </>
  )
}

export default Add_products