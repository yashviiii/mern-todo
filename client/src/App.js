import "./App.css";
import Input from "./Components/Input";
import Box from "./Components/Box";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  console.log("hi");

  // const removeToDo=(id)=>{
  //      console.log(id);
  // }
  
  const getTasks = async() => {
    try{
      const {data} = await axios.get('http://localhost:8000/api/tasks/all');
      setTodos(data);
      console.log(data);
    }catch(err){
      console.log(`error ${err}`);
    }
  }

  useEffect(() => {
    getTasks();
  }, [])



  return (
    <div className="bg-black h-screen w-screen p-3">
      <div className="mx-auto max-w-[750px] min-h-[550px] shadow-4xl bg-white rounded-3xl px-4 py-3 mt-4 ">
        
        <Input todos={todos} setTodos={setTodos} />
        <Box todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
