import React from 'react'
import {BsTrash} from 'react-icons/bs'
import {RxUpdate} from 'react-icons/rx'
import { useState } from 'react'
import axios from 'axios'
const Item = (props) => {
    const[done,setDone]=useState(props.completed);

    const updatedTask=async(id)=>{
      try{
        const {data} = await axios.put(`http://localhost:8000/api/tasks/${id}`,{
        "completed": !done,
      });
      setDone(!done);
      console.log({...data});
    }catch(err){
      console.log(`error ${err}`);
    }

    };

    const removeToDo=async(id)=>{
      console.log(id);
      try{  
      await axios.delete(`http://localhost:8000/api/tasks/${id}`);
        console.log('task deleted');
        const newToDo = props.todos.filter(
          (d,index)=>{
            console.log(d._id);
            if(d._id !== id){
              return true;
            }else{
              return false;
            }
            }
        )
        console.log(newToDo);
        props.setTodos(newToDo);
      }catch(err){
        console.log(`error ${err}`);
      }
    }

    
  return (
    <div onClick={()=> updatedTask(props.id)} className={` select-none cursor-pointer w-full border-b p-3 bg-gray-900 rounded-3xl flex justify-between items-center`}>
       <div>
        {/* <span className='px-2 text-[12px] text-slate-50'>
          {props.time}
        </span> */}

        <span className={`${done===true ? 'line-through':''} text-white px-2 py-2 text-xl`}>
           {props.title}
        </span>
       </div>

       <div className='text-white px-2 py-2 flex '>
        <span className='px-5 text-white' >
        <RxUpdate/>
        </span>

        <span onClick={() => removeToDo(props.id)}>
            
         <BsTrash/>
        </span>
       </div>

       {/* <div className='text-white'>
         <GrDocumentUpdate/>
       </div> */}

    </div>
  )
}

export default Item
