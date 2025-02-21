import { useState } from "react";
import Task from "./Task";

function App() {
  const [value, setvalue] = useState("");
  const [list, setlist] = useState([]);
  // const [deleteno , setdelete] = useState()

  const handledelete = (task) => {
    setlist(
      list.filter((ite) => {
        return ite.id !== task;
      })
    );
  };
  const handlecompleted = (id) => {
    setlist(
      list.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };
  
  const handleclick = () => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskname: value,
      completed: false,
    };
    setlist([...list, task]);
    // console.log(list)
  };
  const handlechange = (event) => {
    // temp =
    setvalue(event.target.value);
    // console.log(event.target.value)
  };

  return (
    <>
      <div> TO do list -- Basic CURD operations --</div>
      <br />
      <div>
        <input type="text" onChange={handlechange} />

        <button onClick={handleclick}> Add</button>
      </div>
      <div>
        {list.map((ite, key) => (
          <Task
            taskname={ite.taskname}
            key = {ite.id}
            id={ite.id}
            handledelete={handledelete}
            completed={ite.completed} 
            handlecompleted={handlecompleted}
          />
        ))}
      </div>
    </>
  );
}

export default App;
