import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("i am on delete", todo);

    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: MediaDevices,
    }
    settodos([...todos, myTodo]);
    console.log(myTodo)

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));


    }, [todos])


  }
  const [todos, settodos] = useState([initTodo]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Switch>
      <Route path="/" render = {()=>{
        return(
        <>
         <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
        </>)
      }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
     
        
      <Footer />
    </>
  );

}

export default App;
