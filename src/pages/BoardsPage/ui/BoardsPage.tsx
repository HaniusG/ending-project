import React from "react";
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


const BoardsPage = () => {
  const user = useSelector((state: RootState) => state.user.profile);

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
              <div>
                <button>
                  <FaBarsProgress/> Board
                </button>
                <button>
                  <FaEye /> Views
                </button>
                <button>
                  <FaUserLarge /> Members
                </button>
                <button>
                  <FaGear /> Settings
                </button>
                <button>
                  <FaConnectdevelop /> Upgrades
                </button>
              </div>
            </div>
          </div>
          <div className={styles.fullTemplates}>
           <Link to='/tasks'>
            <TemplatePreviews
              backgroundColor="#128EA2"
              text="React.Js"
              isTemplate={false}
            />
            </Link>
            
            <div className={styles.createBoard}>+ Create new board</div>
          </div>
        </div>
      </div>
    </HeaderAndBarLayout> 
   
  );
};

export default BoardsPage;
