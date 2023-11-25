import React, { useState, useEffect, useRef } from "react";
import TaskGroup from "widgets/TaskGroup/TaskGroup";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskPage.module.css";
import { TaskGroupProps } from "../TaksPage.interface";
import Comments from "features/Comments";
import { log } from "console";
import { RootState } from "entites/store";
import Modal from "features/Modal";

const TaskPage: React.FC = () => {
  const tasks = useSelector((state: RootState) => {
    return state.tasks.tasks;
  });

  const comments = useSelector((state: RootState) => {
    return state.comments.comments;
  });

  const isClicked = useSelector((state: RootState) => {
    return state.comments.isClicked;
  });

  console.log(comments);

  return (
    <div>
      <div className={styles.listGroup}>
        <TaskGroup tasks={tasks} />
        <button className={styles.addList}>+ Add another list</button>
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
  );
};

export default TaskPage;
