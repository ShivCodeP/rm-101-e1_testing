import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({ totalTask, setTotalTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [task, setTask] = React.useState({
    id: totalTask.length + 1,
    text: "",
    done: false,
    count: 1
  });
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" placeholder="Add Task..." value={task.text} onChange={(e) => setTask({ ...task, text: e.target.value })} />
      <button data-testid="add-task-button" onClick={() => setTotalTask(prev => [...prev, task])}>+</button>
    </div>
  );
};

export default AddTask;
