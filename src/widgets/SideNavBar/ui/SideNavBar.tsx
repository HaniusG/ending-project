import React from "react";
import styles from "./SideNavBar.module.css";
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";

const SideNavBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link to="/boards">
              <FaBarsProgress />
              <span>Boards</span>{" "}
            </Link>
          </li>
          <div className={styles.workspaces}>
            <div className={styles.workspaceTitle}>
              <span>Workspaces</span>
              <button>+</button>
            </div>
            <div>
              <li>
              <Link to='/tasks'><span>React.js</span></Link>
              </li>
              
            </div>
          </div>
        </ul>
      </nav>
      <h1></h1>
    </div>
  );
};

export default SideNavBar;
