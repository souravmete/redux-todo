import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'; 
import { MdDeleteForever } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";

export const Todo = () => {


  const task=useSelector ((state)=>state.task);
  console.log(task);
  return (
    <>
      <div className="containers">
        <div className="todo-app">
          <h1>
          <FontAwesomeIcon icon={faPenToSquare} /> To-do List:
          </h1>
          <div className="row">
            <input type="text" id="input-box" placeholder="Add a new task" />
            <button >Add</button>
          </div>
          <ul id="list-container">
            {
              task.map((curTask,index)=>{
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
