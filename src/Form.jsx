import React, { useState } from 'react'
import './Form.css';
const Form = () => {

const[getVal,setGetVal]=useState();


  const Handler=()=>
  {
 
  }
   const subForm=()=>
   {

   }
  return (
    <>
    <div >
        <form className='form' onSubmit={subForm}>
     <label>Name:
     <input type='text' className='name' name='name'   required onChange={Handler}></input>
     <div className='name_eror'></div> 
     </label>
     <br/>
     <label>Phone
     <input type='phone' className='phone' name='phone'  required onChange={Handler}></input>
     <div className='phone_error'></div>
     </label>
     <br/>
     <label>Email
<input type='email' className='email' name='email'  required onChange={Handler}></input>
<div className='email_error'></div>
</label>
<br/>
<input type='Submit' value="Submit"/>

 </form>
</div>
    </>
  )
}

export default Form
