import React, { useState } from 'react'
import styles from './TaskItem.module.css'
import { FaPen, FaAlignLeft, FaComment, } from "react-icons/fa6";
import Comments from 'features/Comments';
import { TaskItemPropsI } from './TaskItem.interface';

 const TaskItem: React.FC<TaskItemPropsI> = ({i, handleCommentShow}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  const onCommentShow=()=>{
    setIsClicked(true)
    handleCommentShow(i.comments, isClicked)
  }
     
  console.log("this is", isClicked);
  
  return (
    <ul>
          <li>
            <div className={styles.taskName}>
              {i.name}
              <button className={styles.bbutton}>
                <FaPen />
              </button>
            </div>
  
            <button className={styles.bbutton}>
              <FaAlignLeft />
            </button>
            <button className={styles.bbutton} onClick={onCommentShow}>
              <FaComment />
            </button>
          
          </li>
        </ul>
  )
}

export default TaskItem;
