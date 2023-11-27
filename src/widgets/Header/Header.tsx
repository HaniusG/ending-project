import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaBell, FaQuestion, FaSearchengin, FaChevronDown, FaTrello } from "react-icons/fa6";
import { HeaderProps } from "./Header.interface";
import React, {useState} from "react";
import { RootState } from "entites/store";
import { useSelector } from "react-redux";

const Header: React.FC<HeaderProps>= ({ handleSignOut}) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)

  const user = useSelector((state: RootState) => state.user.profile);
  
  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  }


  
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <h2><FaTrello/> </h2>
        
        <h2>Trello</h2>
      </div>
      
      <nav>
        <Link to="#">Workspaces  <span><FaChevronDown/></span></Link>
        <Link to="#">Recent   <span><FaChevronDown/></span></Link>
        <Link to="#">Starred  <span><FaChevronDown/></span></Link>
        <Link to="#">Templates   <span><FaChevronDown/></span></Link>
      </nav>
    

      <div className={styles.searchContainer}>
        <input type="text"  placeholder="Search..." />
        <button ><FaSearchengin/></button>
      </div>
      <div className={styles.headerRight}>
        <button><FaBell/></button>
        <button><FaQuestion/></button>
        <div className={styles.userContainer} onClick={toggleUserMenu}>
        
        {
            user?.photoUrl ?
              <img
              
            src={user?.photoUrl}
            alt="User Avatar"
            className={styles.userImage}
          />: <div>No photo</div>
          }
          {
                  isUserMenuOpen ? (
                    <div className={styles.userMenu}>
                      <ul>
                        <li>
                          <Link to='/user'>Profile</Link>
                        </li>
                        <li>
                          <a href='#'>Settings</a>
                        </li>
                        <li onClick={handleSignOut}>
                          <Link to='/'>Sign out</Link>
                        </li>
                      </ul>
                    </div>
                  ) : null
}
        </div>
      </div>
      
    </header>
  );
};
export default Header;
