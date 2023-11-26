import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { FaPen, FaAlignLeft, FaComment } from "react-icons/fa6";
import { TaskItemPropsI } from "./TaskItem.interface";
import { useDispatch, useSelector } from "react-redux";
import { clickChange, commentChange } from "entites/comments/commentsSlice";
import { RootState } from "entites/store";
import { changeTaskItemName } from "entites/tasks/taskSlice";

const TaskItem: React.FC<TaskItemPropsI> = ({ item, parentId }) => {
  
  const [isEditting, setEditting] = useState(false)
  const [itemName, setItemName] =useState(item.name)

  const tasks = useSelector((state: RootState) => {
    return state.tasks.tasks;
  });

  
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickChange(true));
    dispatch(commentChange(item.comments));
  };

  const handleTaskItemChange = () => {
    setEditting(!isEditting)
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value)
    dispatch(changeTaskItemName({ parentId, selfId: item.id, name: e.target.value }));

  }

  return (
    <ul>
      <li>
        <div className={styles.taskName}>
          {!isEditting ? <p>{item.name}</p>: <input type="text" value={itemName} onChange={handleInputChange}/>}
          <button className={styles.bbutton}  onClick={handleTaskItemChange}>
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
  );
};

export default TaskItem;
