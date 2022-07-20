import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";

const Task = ({id,text,done,count,handleChange,setTotalTask,setUnCompletedTask}) => {

  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" checked={done} data-testid="task-checkbox" onChange={(e) => {
        console.log(e.target.checked)
        handleChange(id,"done",e.target.checked)
      }}/>
      <div data-testid="task-text">{text}</div>
      <Counter id={id} count={count} setCount={handleChange}/>
      <button data-testid="task-remove-button" onClick={() => setTotalTask(prev => prev.filter(e => e.id !== id))}>X</button>
    </li>
  );
};

export default Task;
