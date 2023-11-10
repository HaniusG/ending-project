import React from "react";
import Header from "widgets/Header/Header";
import TaskGroup from "widgets/TaskGroup/TaskGroup";
import styles from "./TaskPage.module.css";
import SideNavBar from "widgets/SideNavBar/SideNavBar";
const TaskPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.appContainer}>
        <div>
          <SideNavBar/>
        </div>
        <div className={styles.listGroup}>
          <TaskGroup />
          <button className={styles.addList}>+ Add another list</button>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
