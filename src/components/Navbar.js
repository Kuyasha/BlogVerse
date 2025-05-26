
import {Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
import image1 from "../assets/blog-logo.jpeg";

function Navbar() {
  return (
    <>
    <nav>
    <div className={styles.nav_container}>
          <div className={styles.nav_title_wrapper}>
            <Link to="/">
              <img src={image1} className={styles.logo} alt="logo"/>
            </Link>   
            <h4 className={styles.title}>BlogVerse</h4>
          </div>
    </div>    
    </nav>
    <Outlet/>
    </>
  );
}

export default Navbar;