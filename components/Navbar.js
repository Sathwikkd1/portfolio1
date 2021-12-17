import styles from '../styles/Navbar.module.css'
import { Link } from "react-scroll"







function Navbar() {

   
    

    
    return (
        <div className={styles.container}>

           
            
           
           <ul className={styles.list}>
           <Link className={styles.logo} href="/">Portfolio</Link>
               <li className={styles.listItems}>
                   <Link to="about" smooth={true} >About</Link>
               </li>
               <li className={styles.listItems}>
                   <Link to="education" smooth={true}><a>Education</a></Link>
               </li>
               <li className={styles.listItems}>
                   <Link to="skills" smooth={true}>Skills</Link>
               </li>
               <li className={styles.listItems}>
                   <Link to="portfolio" smooth={true}>Portfolio</Link>
               </li>
               <li className={styles.listItems}>
                   <Link to="contact" smooth={true}>Contact</Link>
               </li>
               

           </ul>
           
          
               
           
        </div>
    )
}

export default Navbar
