
import {Link, Outlet} from 'react-router-dom';
import styles from './Home.module.css';
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <div className={styles.body}>
      <Navbar/>
      <main>
        <h2>Publish your passions, your way</h2>
        <h4>Create a unique and beautiful blog easily</h4>
        <Link to="blog"><button className={styles.btn}>CREATE YOUR BLOG</button> </Link>
      </main>
    <Outlet/>
    </div>   
    </>
  );
}

export default Home;