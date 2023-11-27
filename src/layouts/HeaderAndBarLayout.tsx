import React, { ReactNode } from 'react'
import Header from 'widgets/Header/Header'
import SideNavBar from 'widgets/SideNavBar'

const HeaderAndBarLayout = ({children}: {children: ReactNode} )=> {
  return (
    <>  
        <Header/>
        <div style={{display: 'flex'}}>
          <SideNavBar/>
          {children}
        </div>
    </>
  )
}


export default HeaderAndBarLayout;
