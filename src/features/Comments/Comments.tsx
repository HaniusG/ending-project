import React, { useState } from "react";
import styles from "./Comments.module.css";
import Comment from "features/Comment/Comment";
import { CommentsProps } from "./Comment.interface";
import { FaComment } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "entites/store";
import { useAppDispatch } from "hooks/useAppDispatch";
import { addTaskGroup } from "entites/board/boardSlice";
import { useDispatch } from "react-redux";
import { commentChange } from "entites/comments/commentsSlice";

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  
  const user = useSelector((state: RootState) => state.user.profile);
  const dispatchA = useAppDispatch();
  const dispatch = useDispatch()

  const board1 = useSelector((state: RootState) => {
    return  state.board.board;
   });

   const commentInfo = useSelector((state: RootState) => {
    return  state.comments;
   });


  const [isInputClicked, setInputClicked] = useState(false)
  const [comment, setComment] = useState('');

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setComment(e.target.value)
  }
  
  const addComment = () =>{
    if(!comment){
      setInputClicked(false)
    }else{
      dispatchA(
        addTaskGroup({
          id: board1[0].id,
          postData: {comment, name: user?.displayName, image: user?.photoURL},
          updateCase: 'addTC',
          parentId: commentInfo.parentId,
          selfId: commentInfo.selfId,
    })
   
    )
    const copy = JSON.parse(JSON.stringify(comments)) as typeof comments;
    copy.push({
      id: 5,
      author: {
        id: 23,
        name: user && user.displayName ? user?.displayName: 'user',
        image: user && user.photoURL ? user?.photoURL: 'no photo',
      },
      text: comment,
      date: new Date().toDateString(),
      replies: []
    })  
    dispatch(commentChange({comments: copy , parentId: commentInfo.parentId,
        selfId: commentInfo.selfId}));
      setInputClicked(false)
    }
    setInputClicked(false)
    setComment('')
  }

  return (

    <div className={styles.commentsTab}>
      <h1>Comments  </h1>
      <div className={styles.addComment}>
        <div onClick={()=>setInputClicked(true)}>
          <input type="text" value={comment} onChange={handleComment}/>
        </div>
      

      {isInputClicked?<button onClick={addComment}>{comment ? "Add comment": "Close"}</button>:null}
      </div>

      
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
