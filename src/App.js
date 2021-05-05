import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import {About} from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
    if (todos.length === 0) {
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
  }
  const [todos, settodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos])
  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Switch>
      <Route exact path="/" render = {()=>{
        return(
        <>
         <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
        </>)
      }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </>
  );

}

export default App;
