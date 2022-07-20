import React from "react";
import styles from "./tasks.module.css";
import {Task} from "../Task"

const Tasks = ({totalTask,unCompletedTask,setTotalTask,setUnCompletedTask,handleChange}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {totalTask.length>0?<ul data-testid="tasks" className={styles.tasks}>
        {totalTask.map(e => <Task {...e} handleChange={handleChange} setTotalTask={setTotalTask} setUnCompletedTask={setUnCompletedTask} />)}
      </ul>:
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>}
    </>
  );
};

export default Tasks;
