import React from 'react'
import styles from './TaskGroup.module.css'
import { FaPen, FaAlignLeft, FaComment, FaCopy } from 'react-icons/fa6'

const TaskGroup = () => {
  return (
    <div className={styles.taskGroup}>
      <div className={styles.taskName}>
        <h4>Backlog</h4>
        <button className={styles.bbutton}><p>. . .</p></button>
      </div>
      
      <ul>
        <li>
          <div className={styles.taskName}>
            planning
            <button className={styles.bbutton}><FaPen/></button>
          </div>
          
          <button className={styles.bbutton}><FaAlignLeft/></button>
          <button className={styles.bbutton}><FaComment/></button>
        </li>
        <li>Testing</li>
      </ul>

      <div>
        <button className={styles.addButton}>+ Add a card</button>
        <button className={styles.bbutton}><FaCopy/></button>
      </div>

    </div>
  )
}

export default TaskGroup;