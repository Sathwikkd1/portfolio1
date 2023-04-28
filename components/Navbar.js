import styles from '../styles/Navbar.module.css'
import { Link } from "react-scroll";


function Navbar() {

   
    

    
    return (
        <div className={styles.container}>

           
            
           
           <ul className={styles.list}>
           <Link className={styles.logo} href="/">Library Management</Link>
               <li className={styles.listItems}>
                   <Link to="about" smooth={true} >About</Link>
               </li>
               <li className={styles.listItems}>
                   <Link to="portfolio" smooth={true}><a>Books</a></Link>
               </li>
               <li className={styles.listItems}>
                   <Link href='https://portfolio1-3uo799o99-megha-yg.vercel.app/books' passhref>SignUP</Link>
               </li>
               <li className={styles.listItems}>
                   <Link href='https://portfolio1-3uo799o99-megha-yg.vercel.app/contact' passhref>Login</Link>
               </li>
               <li className={styles.listItems}>
                   <Link to="contact" smooth={true}>Contact</Link>
               </li>
               

           </ul>
           
          
               
           
        </div>
    )
}

export default Navbar
