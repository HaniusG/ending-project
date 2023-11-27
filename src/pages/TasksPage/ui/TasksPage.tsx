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

const TaskPage: React.FC = () => {
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
      dispatch(addTask(newTaskName));
      setNewTaskName("");
      setAddNewClicked(false);
    }
  };

  const comments = useSelector((state: RootState) => {
    return state.comments.comments;
  });

  const isClicked = useSelector((state: RootState) => {
    return state.comments.isClicked;
  });

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
              />{" "}
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
        </div>
        {isClicked ? <div className={styles.overlay}></div> : null}
      </div>
    </HeaderAndBarLayout>
  );
};

export default TaskPage;
