import React, { useState } from 'react'
import styles from './TaskItem.module.css'
import { FaPen, FaAlignLeft, FaComment, } from "react-icons/fa6";
import Comments from 'features/Comments';
import { TaskItemPropsI } from './TaskItem.interface';
import { useDispatch, useSelector } from 'react-redux'
import { clickChange, commentChange } from 'entites/comments/commentsSlice';
import { RootState } from 'entites/store';

 const TaskItem: React.FC<TaskItemPropsI> = ({item}) => {
  // const [isClicked, setIsClicked] = useState<boolean>(false);
  
  // const onCommentShow=()=>{
  //   setIsClicked(true)
  //   handleCommentShow(i.comments, isClicked)
  // }
  const dispatch = useDispatch();
 
  
  const handleClick = () =>{
    dispatch(clickChange(true))
    dispatch(commentChange(item.comments))
  }
  
  
  return (
    <ul>
          <li>
            <div className={styles.taskName}>
              {item.name}
              <button className={styles.bbutton}>
                <FaPen />
              </button>
            </div>
  
            <button className={styles.bbutton}>
              <FaAlignLeft />
            </button>
            <button className={styles.bbutton} onClick={handleClick}>
              <FaComment />
            </button>
          
          </li>
        </ul>
  )
}

export default TaskItem;
