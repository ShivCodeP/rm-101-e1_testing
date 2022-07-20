import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ totalTask, unCompletedTask }) => {
  // console.log(totalTask,unCompletedTask)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <small>You have 
        <b data-testid="header-remaining-task"> {unCompletedTask.length} </b>
         of 
        <b data-testid="header-total-task"> {totalTask.length}</b> tasks remaining
      </small>
    </div>
  );
};

export default TaskHeader;
