import React from "react";
import { FaPen, FaAlignLeft, FaComment, FaCopy } from "react-icons/fa6";
import styles from './Task.module.css'
import { TaskPropsI } from "./Task.interface";
import TaskItem from "features/TaskItem";
import { Draggable } from "react-beautiful-dnd";




const Task: React.FC<TaskPropsI> = ({item}) => {
  
  
  return (

    <div className={styles.taskGroup}>
      <div className={styles.taskName}>
        <h4>{item.taskState}</h4>
        <button className={styles.bbutton}>
          <p>. . .</p>
        </button>
      </div>
      {item.tasks.map((item, index) => 
      {
        return(
          <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
            {
              (provided)=>{
                return(
                  <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <TaskItem item={item} key={item.id} />

                  </div>
                  
                )
              }
            }
          </Draggable>
        )
      }
          
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
