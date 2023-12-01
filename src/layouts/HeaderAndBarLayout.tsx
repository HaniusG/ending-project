import React, { ReactNode } from 'react'
import Header from 'widgets/Header/Header'
import SideNavBar from 'widgets/SideNavBar'
import styles from "./HeaderAndBar.module.css"
const HeaderAndBarLayout = ({children}: {children: ReactNode} )=> {
  return (
    <>  
        <Header/>
        <div className={styles.appdiv}>
          <SideNavBar/>
          <div className={styles.contentDiv}>
          {children}
          </div>
       
        </div>
    </>
  )
}


export default HeaderAndBarLayout;
