import React from "react";
import styles from "./Comment.module.css";
import { CommentIProps } from "./Comment.interface";
import Replies from "features/Replies";

const Comment: React.FC<CommentIProps> = ({comment}) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.parentComment}>
        <div className={styles.userInfo}>
        <img src={comment.author.image} alt="User Photo" />
        <div>
          <p>{comment.author.name}</p>
          <span>{comment.date}</span>
        </div>
      </div>
        {comment.text}
      </div>
      
      <Replies replies={comment.replies}/>
      <div className={styles.addReply}>Add a Reply...</div>
    </div>
  );
};

export default Comment;