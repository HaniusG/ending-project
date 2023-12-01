import React, { useState } from "react";
import { FaPen, FaAlignLeft, FaComment, FaCopy } from "react-icons/fa6";
import styles from "./Task.module.css";
import { TaskPropsI } from "./Task.interface";
import TaskItem from "features/TaskItem";
import { Draggable } from "react-beautiful-dnd";
import { addItem } from "entites/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { addTaskGroup } from "entites/board/boardSlice";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "entites/store";

const Task: React.FC<TaskPropsI> = ({ task }) => {
  const [newItemName, setNewItemName] = useState("");
  const [addNewClicked, setAddNewClicked] = useState(false);

  const board1 = useSelector((state: RootState) => {
    return  state.board.board;
   });
 
  const dispatchA = useAppDispatch();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    setAddNewClicked(true);
  };


  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewItemName(e.target.value)
  }

  const onAddNewClick = () => {
    if(newItemName===""){
      setAddNewClicked(false)
    }else{
      dispatchA(
        addTaskGroup({
          id: board1[0].id,
          postData: newItemName,
          updateCase: 'addT',
          parentId: task.id,
          selfId: 0,
    })
      )
       setNewItemName('')
    }
  } 
  return (
    <div className={styles.taskGroup}>
      <div className={styles.taskName}>
        <h4>{task.taskState}</h4>
        <button className={styles.bbutton}>
          <p>. . .</p>
        </button>
      </div>
      {task.tasks.map((item, index) => {
        return (
          <TaskItem item={item} parentId={task.id} key={item.id} />
          // <Draggable
          //   key={item.id}
          //   draggableId={item.id.toString()}
          //   index={index}
          // >
          //   {(provided) => {
          //     return (
          //       <div
          //         {...provided.draggableProps}
          //         {...provided.dragHandleProps}
          //         ref={provided.innerRef}
          //       >
          //         <TaskItem item={item} parentId={task.id} key={item.id} />
          //       </div>
          //     );
          //   }}
          // </Draggable>
        );
      })}
      <div className={styles.taskBottom}>
        {!addNewClicked ? (
          <div className={styles.taskBottomDiv}>
            <button className={styles.addButton} onClick={handleAddClick}>
              + Add a card
            </button>
            <button className={styles.copyButton}>
              <FaCopy />
            </button>
          </div>
        ) : (
          <div className={styles.addNew}>
            <input type="text" value={newItemName} onChange={onInputChange }/>
            <button onClick={onAddNewClick}>{newItemName!=="" ? "Add new card": 'Close'}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
