import React, {useState, useEffect, useRef} from "react";
import TaskGroup from "widgets/TaskGroup/TaskGroup";
import styles from "./TaskPage.module.css";
import { TaskGroupProps } from "./TaksPage.interface";
import Comments from "features/Comments";


const TaskPage: React.FC<TaskGroupProps> = ({
  tasks,
  handleCommentShow,
  comments,
  isClicked
}) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(isClicked)
  
  const modalRef = useRef<HTMLDivElement>(null)

console.log(isOpen);

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {      
      setIsOpen(false)
    }
  }


  useEffect(() => {
    document.addEventListener('click', closeModal);

    return () => {
      document.removeEventListener('click', closeModal);
    }
  },[])


  
  return (
    <div>
      <div className={styles.listGroup}>
        <TaskGroup tasks={tasks} handleCommentShow={handleCommentShow} />
        <button className={styles.addList}>+ Add another list</button>
        {comments ? (
          <div ref={modalRef}>
            <Comments comments={comments} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TaskPage;
