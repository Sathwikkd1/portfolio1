import styles from "../styles/Intro.module.css";
import Image from "next/image";

import {Link} from 'react-scroll';





function Intro() {
    return (
        <div className={styles.container} id="about">
           
            
            <div className={styles.card}>
                

                
               <h1 className={styles.title}>
                  JSS SCIENCE AND TECHNOLOGY UNIVERSITY
                </h1>
                <p className={styles.description}>MYSURU 
                   <br/> Development of automated library management system
                </p>
                <button className={styles.btn}><Link to="contact" smooth={true}>Contact</Link></button>

            
            </div>

            //<div className={styles.card}>
              //  <Image className={styles.pic} src="/pic.jpeg" width="170vw" height="170vh" alt="/"></Image>
            //</div>

            
            
            
        </div>
    )
}

export default Intro
