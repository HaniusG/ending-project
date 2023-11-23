import React from "react";
import styles from "./Replies.module.css";
import { RepliesProps } from "./Replies.interface";

const Replies: React.FC<RepliesProps> = ({ replies }) => {
  return (
    <>
      {replies.map((reply) => (
        <div className={styles.replyContainer} key={reply.id}>
          <div className={styles.replyInfo}>
            <img src={reply.author.image} alt="User Photo" />
            <div>
              <p>{reply.author.name}</p>
              <span>{reply.date}</span>
              <div className={styles.replyText}>{reply.text}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Replies;
