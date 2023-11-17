import React from 'react'
import styles from './TaskGroup.module.css'
import { TaskGroupProps, TaskProps } from 'pages/TasksPage/TaksPage.interface'
import Task from "features/Task";

const TaskGroup: React.FC<TaskGroupProps> = ({tasks, handleCommentShow}) => {

  return (
    <div className={styles.taskGroup}>
        {
        tasks.map((item) => 
          <Task item={item} key={item.id} handleCommentShow={handleCommentShow}/>
        )
      }
    </div>
  )
}

export default TaskGroup;