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

const BoardsPage = () => {
  return (
    <div className={styles.boardPage}>
      <div className={styles.fullTempDiv}>
        <div className={styles.fullTempDiv}>
          <h3>
            <FaClock /> Recently viewed
          </h3>
          <div className={styles.fullTemplates}>
            <TemplatePreviews
              backgroundColor="#5F287B"
              text="Project Management"
              isTemplate={true}
            />
            <Link to='/tasks'>
            <TemplatePreviews
              backgroundColor="#128EA2"
              text="React.Js"
              isTemplate={false}
            />
            </Link>
          
            <TemplatePreviews
              backgroundColor="#76736B"
              text="Ha"
              isTemplate={false}
            />
            <TemplatePreviews
              backgroundColor="#AE4D7B"
              text="My trello Board"
              isTemplate={false}
            />
          </div>
        </div>
        <div className={styles.fullTempDiv}>
          <h2>Your workspaces</h2>

          <div>
            <div className={styles.workspaceDescript}>
              <div className={styles.userInfo}>
                <img
                  src="https://media.istockphoto.com/id/1149504274/photo/portrait-of-a-taiwanese-man.webp?s=612x612&w=is&k=20&c=V303PB-_s32NcD47Acei71NNmsMJV9_vaXT865V7Wog="
                  alt=""
                />
                <h4>Your Workspace</h4>
              </div>
              <div>
                <button>
                  <FaBarsProgress /> Board
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
    </div>
  );
};

export default BoardsPage;
