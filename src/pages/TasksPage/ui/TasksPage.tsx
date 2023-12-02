import React, { useState } from "react";
import TaskGroup from "widgets/TaskGroup/TaskGroup";
import { useSelector } from "react-redux";
import styles from "./TaskPage.module.css";
import Comments from "features/Comments";
import { RootState } from "entites/store";
import Modal from "features/Modal";
import { addTask } from "entites/tasks/taskSlice";
import { useDispatch } from "react-redux";
import HeaderAndBarLayout from "layouts/HeaderAndBarLayout";
import { addTaskGroup, createBoard } from "entites/board/boardSlice";
import { useAppDispatch } from "hooks/useAppDispatch";
import { TaskItemProps, TaskProps } from "../TaksPage.interface";
import { log } from "console";
import { deleteClickChange } from "entites/delete/deleteSlice";


const TaskPage: React.FC = () => {

  const board1 = useSelector((state: RootState) => {
   return  state.board.board;
  });


  

  const dispatchA = useAppDispatch();
  
  const dispatch = useDispatch();

  const [newTaskName, setNewTaskName] = useState("");
  const [addNewClicked, setAddNewClicked] = useState(false);

  const handleAddClick = () => {
    setAddNewClicked(true);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const onAddNewClick = () => {
    if (newTaskName === "") {
      setAddNewClicked(false);
    } else {
      dispatchA(
        addTaskGroup({
          id: board1[0].id,
          postData: {
            taskState: newTaskName,
            tasks: []
          },
          updateCase: 'addTG',
          parentId: 0,
          selfId: 0,
    })
      )
      setNewTaskName("");
      setAddNewClicked(false);
    }
  };

  const comments = useSelector((state: RootState) => {
    return state.comments.comments;
  });

  const deleteClick = useSelector((state: RootState)=>{
    return state.delete.isClicked
  })

  const parentId = useSelector((state: RootState)=>{
    return state.delete.parentId
  })


  console.log(deleteClick);
  

  const isClicked = useSelector((state: RootState) => {
    return state.comments.isClicked;
  });

  const handleDeleteTask = () => {
    dispatchA(
      addTaskGroup({
        id: board1[0].id,
        postData: "",
        updateCase: "deleteTask",
        parentId,
        selfId: 0,
      })
    );
    dispatch(deleteClickChange(false))
  };

  return (
    <HeaderAndBarLayout>
      <div>
        <div className={styles.listGroup}>
          <TaskGroup />
          {!addNewClicked ? (
            <button onClick={handleAddClick} className={styles.addList}>
              + Add another list
            </button>
          ) : (
            <div className={styles.addNewList}>
              <input
                type="text"
                onChange={onInputChange}
                placeholder="Add list name"
                value={newTaskName}
              />
              <button onClick={onAddNewClick}>
                {newTaskName !== "" ? "Add new List" : "Close"}
              </button>
            </div>
          )}
          {comments ? (
            <div>
              <Modal>
                <Comments comments={comments} />
              </Modal>
            </div>
          ) : null}
          {deleteClick ? (
            <div className={styles.modal}>
                <p>Delete ?</p>
                <div className={styles.buttonDiv}>
                <button className={styles.yesButton} onClick={handleDeleteTask}>Yes</button>
                <button className={styles.noButton} onClick={()=>dispatch(deleteClickChange(false))}>No</button>
                </div>
                
            </div>
          ) : null}
        </div>
        
      
        {isClicked ? <div className={styles.overlay}></div> : null}
        {deleteClick ? <div className={styles.overlay}></div> : null}   
      
      </div>
    </HeaderAndBarLayout>
  );
};

export default TaskPage;
