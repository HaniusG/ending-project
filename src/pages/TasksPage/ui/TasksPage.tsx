import React from "react";
import TaskGroup from "widgets/TaskGroup/TaskGroup";
import { useSelector } from "react-redux";
import styles from "./TaskPage.module.css";
import Comments from "features/Comments";
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


  return (
    <div>
      <div className={styles.listGroup}>
        <TaskGroup/>
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
