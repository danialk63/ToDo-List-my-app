import logo from './logo.svg';
import './App.css';
 import  Header  from "./MyComponents/Header";
 import  {Footer}  from "./MyComponents/Footer";
 import  {Todos}  from "./MyComponents/Todos";
 import  {AddTodo}  from "./MyComponents/AddTodo";
 import React, {useState} from 'react'; 

function App() {

  const onDelete = (todo) =>{
    console.log("I am a on Delete Function of todo", todo);
  
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) =>{
      return e!== todo;
    }));


  }


  const addTodo = (title, desc)=>{
    console.log("Im adding this todo", title, desc)
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
       sno = todos[todos.length-1].sno +1;

    }

    
    const myTodo = {
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }


  const[todos, setTodos]= useState([
  {
    sno : 1,
    title: "Go to the market",
    disc: "You need to go to the market to get this job"

  },
  {
    sno : 2,
    title: "Go to the mall",
    disc: "You need to go to the market to get this job2"

  },
  {
    sno : 3,
    title: "Go to the bazar",
    disc: "You need to go to the market to get this job3"

  }
]);

  
  return (

    
    <>
   <Header title = "MY TODO LIST" searchBar = {false}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos = {todos} onDelete={onDelete}/>
 <Footer/>
</>
  );
}

export default App;
