 import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("i am on delete",todo);
    settodos(todos.filter((e)=>{
      return e!==todo;
    })) 
  }
  const [todos, settodos] = useState([
    {
      sno:1,
      title:"Go to the market",
      desc: "hi let go to the mall"
    },
    {
      sno:1,
      title:"Go to the market",
      desc: "hi let go to the school"
    },
    {
      sno:1,
      title:"Go to the market",
      desc: "hi let go to the college"
    }
  ]);
  return (
  <>
  <Header title = "My Todos List" searchBar={false} />
  <AddTodo/>
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
  </>
  );

}

export default App;
