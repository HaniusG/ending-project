import React from "react";
import styles from "./Comments.module.css";
import Comment from "features/Comment/Comment";
import { CommentsProps } from "./Comment.interface";
import { FaComment } from "react-icons/fa6";

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  

  

  return (

    <div className={styles.commentsTab}>
      <h1>Comments  </h1>

      
      <ul className={styles.commentsList}>
      {comments.map((comment) => (
        <li className={styles.comment} key={comment.id}>
          
          <Comment comment={comment} key={comment.id}/>
           
        </li>
      ))}

      {!comments.length ? <h2>No comments yet</h2>: null}
      </ul>
    </div>
  );
};

export default Comments;
