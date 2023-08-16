import React, { useState } from 'react'
import './B.css';
const B = () => {
    let [T,setT]=useState();
    const[C ,setC]=useState();

const myC=(e)=>
{
    
setC(e.target.value);

}
    const myf=()=>{
        setT(C);
      


    }
    
  return (
    <>
    <div className='b'>
      <input type='text' onChange={myC} ></input>
      <label>Show here:{T}</label>
      <div>
      <button onClick={myf}>Click</button>
      </div>
</div>
    </>
  )
}

export default B
