import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react';
import { Add,Reset } from './src/calcuSlice';

function Counter() {
 
  const count=useSelector((store)=>store.counterreducer.counter)
  console.log(count);

  const dispatch=useDispatch()

  const [num,setnum]=useState(0)

  const resetinp=()=>{
    const inputele= document.getElementById('calcu')
    if(inputele){
      inputele.value=""
    }

  }
   
  return (
    <div className='d-flex justify-content-center align-items-center bg-dar'style={{height:"80vh"}}>

        <div style={{borderRadius:"30px"}}  className='w-75 p-3 border shadow p-5 bg-light'>
             <h3 style={{paddingTop:"-25px"}} className='text-center p-5 pb-3'>Calculater</h3>
             <h4  className='text-center pb-3'>{count}</h4>
             
             <div className='justify-content-around d-flex my-3'>
              <input id='calcu' onChange={(e)=>{setnum(e.target.value)}} placeholder='Enter here..' className='form-control' type="text" /> 
              
             </div>
             <button onClick={()=>{dispatch(Add(num))}} className='btn btn-success'>Result</button>
             <button className='btn btn-danger ms-2' onClick={()=>{dispatch(Reset(),resetinp())}}>Reset</button>

        </div>
    </div>
  )
}

export default Counter