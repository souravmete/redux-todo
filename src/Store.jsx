import {createStore} from "redux";


const ADD_TASK = "task/add";
const DEL_TASK = "task/delete";

const initialValue = {
  task: [],
};

const taskReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DEL_TASK:
        const updatedTask = state.task.filter((curTask,index)=>{
            return index !== action.payload        })
      return {
        ...state, 
        task: updatedTask,
      };

    default:
      return state;
  }
};


// create action creator 

export const addTask =(data)=>{
    return {type:ADD_TASK,payload:data}
}


export const delTask =(id)=>{
    return {type:DEL_TASK,payload:id}
}


export const store =createStore(taskReducer);
console.log(store)


console.log("initial state", store.getState())




// store.dispatch(addTask("Mango"))
// console.log("updated",store.getState())


// store.dispatch(addTask("bananan"))
// console.log("updated",store.getState())


// store.dispatch(addTask("sourav"))
// console.log("updated",store.getState())




// store.dispatch(delTask(1))
// console.log("deleted",store.getState())