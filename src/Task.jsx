import React from "react";

export default function Task(props) {
  return (
    
      
      <div style={{backgroundColor : props.completed ? "green" : "white"}}>

        <h2>{props.taskname}</h2>
        <button onClick={() => props.handledelete(props.id)}> delete</button>
        <button onClick={() => props.handlecompleted(props.id)}>Completed</button>
      </div>
      
    
  );
}
