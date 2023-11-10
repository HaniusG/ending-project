import React from 'react'
import Header from 'widgets/Header/Header'
import TaskGroup from 'widgets/TaskGroup/TaskGroup'
import styles from './TaskPage.module.css'
const TaskPage = () => {
  return (
    <div >
        <Header/>
        <div className={styles.listGroup}>
        <TaskGroup/>
        <button className={styles.addList}>+ Add another list</button>
        </div>
        
    </div>
  )
}

export default TaskPage;
