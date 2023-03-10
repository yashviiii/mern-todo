import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
const Input = (props) => {

    const inputBox = useRef();
    const addToDoHandler = async(item) => {
        // console.log(item);
      if(item.length > 0){
        const {data} = await axios.post('http://localhost:8000/api/tasks',{
          "title":item,
          "desc":"new task"
        });
        console.log({...data})
        props.setTodos([
          ...props.todos,
          {
            ...data,
            // time: new Date().toLocaleTimeString(),
          },
        ]);
      }
   };
    
   
  return (
    <>
    
    <div  className="p-2 flex justify-between m-3">
     <input ref={inputBox} type="text" placeholder='Enter Todo here' className='p-3 border border-slate-700 rounded-3xl w-[90%] ' />
   
    
    <div className='w-[50px] h-[50] bg-black rounded-[50%] flex justify-center items-center text-white' onClick={()=>{
    addToDoHandler(inputBox.current.value)
    inputBox.current.value="";
    }
    }>
    <AiOutlinePlus/>
    </div>
    </div>

    </>
    
  )
}

export default Input
