import React from "react";
import styles from "./Comments.module.css";
import Comment from "features/Comment/Comment";
import { CommentsProps } from "./Comment.interface";

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  

  

  return (

    <div className={styles.commentsTab}>
      <h2>Comments</h2>

      
      <ul className={styles.commentsList}>
      {comments.map((comment) => (
        <li className={styles.comment} key={comment.id}>
          
          <Comment comment={comment} key={comment.id}/>
           
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Comments;
