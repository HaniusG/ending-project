import React, { useState } from "react";
import styles from "./BoardsPage.module.css";
import TemplatePreviews from "features/TemplatePreviews/TemplatePreviews";
import {
  FaClock,
  FaBarsProgress,
  FaUserLarge,
  FaGear,
  FaEye,
  FaConnectdevelop,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeaderAndBarLayout from "layouts/HeaderAndBarLayout";
import { useSelector } from "react-redux";
import { RootState } from "entites/store";
import { createNewBoard, createBoard } from "entites/board/boardSlice";
import { useAppDispatch } from "hooks/useAppDispatch";


const BoardsPage = () => {
  const [newBoardName, setNewBoardName] = useState("");
  const [addNewClicked, setAddNewClicked] = useState(false);
    

  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user.profile);

  const boards = useSelector((state: RootState) => {
    return  state.board.board;
   });

   const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoardName(e.target.value);
  };

  const onAddNewClick = () => {
    if (newBoardName === "") {
      setAddNewClicked(false);
    } else {
      dispatch(
        createNewBoard(newBoardName)
      )
      setNewBoardName("");
      setAddNewClicked(false);
    }
  };


  return (
    <HeaderAndBarLayout>
       <div className={styles.boardPage}>
    
        
        <div className={styles.fullTempDiv}>
          <h2>Your workspaces</h2>

          <div>
            <div className={styles.workspaceDescript}>
              <div className={styles.userInfo}>
                <img
                  src={user && user.photoURL ? user?.photoURL: ''}
                  alt=""
                />
                <h4>{user?.displayName+"'s"} Workspace</h4>
              </div>
            
            </div>
          </div>
          <div className={styles.fullTemplates}>
          {/* {
            boards.map((boards)=>{
            
            })
          } */}
           <Link to='/tasks'>



            <TemplatePreviews
              backgroundColor="#128EA2"
              text="React.Js"
              isTemplate={false}
            />

            </Link>
            
            {!addNewClicked ? <div className={styles.createBoard} onClick={()=>setAddNewClicked(true)}>+ Create new board</div>:
            (<div className={styles.addNewList}>
              <input
                type="text"
                onChange={onInputChange}
                placeholder="Add list name"
                value={newBoardName}
              />
              <button onClick={onAddNewClick}>
                {newBoardName !== "" ? "Add new Board" : "Close"}
              </button>
            </div>)}
          </div>
        </div>
      </div>
    </HeaderAndBarLayout> 
   
  );
};

export default BoardsPage;
