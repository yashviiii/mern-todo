import React from 'react'
import Item from './Item'

const Box = (props) => {
    const items = props.todos.map(
        (singleData, index) => {
            return<Item todos={props.todos} setTodos={props.setTodos}  key={index} id={singleData._id} title={singleData.title} desc={singleData.desc} completed={singleData.completed}/>
        }
    )
  return (  
    <div className='p-3'>
      {items}
    
    </div>
  )
}

export default Box
