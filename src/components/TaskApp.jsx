import React from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import {Tasks} from "./Tasks";
import { AddTask } from "./AddTask";
import {default as data} from "../data/tasks.json"

const TaskApp = () => {
  const [totalTask,setTotalTask] = React.useState(data);
  // const [unCompletedTask,setUnCompletedTask] = React.useState(data.filter((e) => e.done));
  const handleChange = (id,key,value) => {
    setTotalTask(totalTask.map(e => {
      if(id==e.id) {
        e[key] = value;
        return e;
      }
      return e;
    }))
    // console.log(totalTask)
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader totalTask={totalTask} unCompletedTask={totalTask.filter(e => e.done)} />
      <AddTask totalTask={totalTask} setTotalTask={setTotalTask} />
      <Tasks totalTask={totalTask} setTotalTask={setTotalTask} unCompletedTask={totalTask.filter(e => !e.done)} handleChange={handleChange}/>
    </div>
  );
};

export default TaskApp;
