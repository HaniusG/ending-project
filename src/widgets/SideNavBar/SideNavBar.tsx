import React from 'react'
import styles from './SideNavBar.module.css'
import { Link } from 'react-router-dom'


const SideNavBar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
          <nav>
            <ul>
              <li><Link to='/boards'>Boards</Link></li>
              <li><Link to='/tasks'>Tasks</Link></li>
              <li><Link to="">Home</Link></li>
            </ul>
          </nav>
          <h1>
            
          </h1>
    </div>
  )
}

export  default SideNavBar;
