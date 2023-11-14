import React from 'react'
import styles from './SideNavBar.module.css'
import { Link } from 'react-router-dom'


const SideNavBar = () => {
  return (
    <div className={styles.sidebar}>
          <nav>
            <ul>
              <li><Link to='/boards'>Boards</Link></li>
              <li><Link to='/tasks'>Tasks</Link></li>
              <li><a href="">Home</a></li>
            </ul>
          </nav>
          <h1>
            
          </h1>
    </div>
  )
}

export  default SideNavBar;
