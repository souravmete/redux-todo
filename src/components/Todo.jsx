import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'; 
import { MdDeleteForever } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { addTask, delTask } from "../Store";




export const Todo = () => {

  const dispatch =useDispatch()

  const [task,setTask] = useState("")


  const handelFormSubmit=(e)=>{
      e.preventDefault();
      dispatch(addTask(task))
      return setTask("")
  }


  const handelTaskDelete=(id)=>{
    return dispatch(delTask(id))
  }



  const tasks=useSelector ((state)=>state.task);
  console.log(tasks);


  return (
    <>
      <div className="containers">
        <div className="todo-app">
          <h1>
          <FontAwesomeIcon icon={faPenToSquare} /> To-do List:
          </h1>
          <form onSubmit={handelFormSubmit} className="row">
            <input type="text" id="input-box" placeholder="Add a new task" value={task} onChange={(e) =>setTask(e.target.value)}/>
            <button >Add</button>
          </form>
          <ul id="list-container">
            {
              tasks.map((curTask,index)=>{
                return <li key={index}>
                  <p>{index} : {curTask}</p>
                  <div>
                  <MdDeleteForever
                  className="icon-style" onClick={()=>handelTaskDelete(index)}/>
                  </div>
                </li>
              })
            }
            {/* <li>Task 2</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};
