import React from "react";
import styles from './BoardsPage.module.css'
import  TemplatePreviews  from "features/TemplatePreviews/TemplatePreviews";
import { FaClock, FaBarsProgress, FaUserLarge, FaGear, FaEye, FaConnectdevelop } from "react-icons/fa6";
import  SideNavBar  from "widgets/SideNavBar/SideNavBar";
import Header from "widgets/Header/Header";
const BoardsPage = () => {
  return (
    <div >
      <Header/>
      <div className={styles.appContainer}>
        <SideNavBar/>
        <div>
        <h3>Most popular templates</h3>
      <span>Get going faster with a template from the Trello community or</span>
      <label htmlFor="exampleSelect" placeholder="https://trello.com/u/hanius/boards"></label>
      <select id="exampleSelect" className={styles.select}>
      <option value="" disabled selected hidden>Choose the category</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div className={styles.fullTempDiv}>
      <div className={styles.fullTemplates}>
      <TemplatePreviews backgroundColor="#5F287B" text="Project Management" isTemplate={true}/>
      <TemplatePreviews backgroundColor="#128EA2" text="Esim Template" isTemplate={true}/>
      <TemplatePreviews backgroundColor="#36600A" text="Project Management" isTemplate={true}/>
      <TemplatePreviews backgroundColor="#8D5E01" text="Project Team Hub" isTemplate={true}/>
      </div>
      <a href="">Browse the full gallery</a>
      </div>
      
      <div className={styles.fullTempDiv}>
        <p><FaClock/> Recently viewed</p>
      <div className={styles.fullTemplates}>
      <TemplatePreviews backgroundColor="#5F287B" text="Project Management" isTemplate={true}/>
      <TemplatePreviews backgroundColor="#128EA2" text="React.Js" isTemplate={false}/>
      <TemplatePreviews backgroundColor="#76736B" text="Ha" isTemplate={false}/>
      <TemplatePreviews backgroundColor="#AE4D7B" text="My trello Board" isTemplate={false}/>
      </div>

      <div>

      </div>

      </div>

      <div className={styles.fullTempDiv}>
        <h2>Your workspaces</h2>

        <div>
          <div className={styles.workspaceDescript}>
            <img src="https://media.istockphoto.com/id/1149504274/photo/portrait-of-a-taiwanese-man.webp?s=612x612&w=is&k=20&c=V303PB-_s32NcD47Acei71NNmsMJV9_vaXT865V7Wog=" alt="" />
            <h4>Your Workspace</h4>
            <button><FaBarsProgress/> Board</button> 
            <button><FaEye/> Views</button>
            <button><FaUserLarge/> Members</button>
            <button><FaGear/> Settings</button>
            <button><FaConnectdevelop/> Upgrades</button>

          </div>
        </div>
      <div className={styles.fullTemplates}>
      <TemplatePreviews backgroundColor="#128EA2" text="React.Js" isTemplate={false}/>
      <div className={styles.createBoard}>
        + Create new board
      </div>

      </div>
      </div>
        </div>
      </div>
      
      
      

    </div>
  );
};

export default BoardsPage;
