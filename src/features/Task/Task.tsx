import React from "react";
import { FaPen, FaAlignLeft, FaComment, FaCopy } from "react-icons/fa6";
import styles from './Task.module.css'
import { TaskPropsI } from "./Task.interface";
import TaskItem from "features/TaskItem";




const Task: React.FC<TaskPropsI> = ({item, handleCommentShow}) => {
  
  
  return (

    <div className={styles.taskGroup}>
      <div className={styles.taskName}>
        <h4>{item.taskState}</h4>
        <button className={styles.bbutton}>
          <p>. . .</p>
        </button>
      </div>
      {item.tasks.map((i) => 
          <TaskItem i={i} key={i.id} handleCommentShow={handleCommentShow}/>
        )
      }
      <div className={styles.taskBottom}>
        <button className={styles.addButton}>+ Add a card</button>
        <button className={styles.copyButton}>
          <FaCopy />
        </button>
      </div>
    </div>
  );
};

export default Task;
