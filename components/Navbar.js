import styles from '../styles/Navbar.module.css'
import { Link } from "react-scroll";




import link from 'next/link'; 


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
                   <link href='/signup'>SignUP</Link>
               </li>
               <li className={styles.listItems}>
                   <link href='/login'>Login</Link>
               </li>
               <li className={styles.listItems}>
                   <Link to="contact" smooth={true}>Contact</Link>
               </li>
               

           </ul>
           
          
               
           
        </div>
    )
}

export default Navbar
