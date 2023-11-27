import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaBell, FaQuestion, FaSearchengin, FaChevronDown, FaTrello } from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import { RootState } from "entites/store";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "entites/user/userSlice";
import { auth } from "../../firebase";

const Header: React.FC= () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     dispatch( setUser(currentUser));
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };
  
 
  
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
            user?.photoURL ?
              <img
              
            src={user?.photoURL}
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
