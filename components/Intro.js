import styles from "../styles/Intro.module.css";
import Image from "next/image";

import {Link} from 'react-scroll';





function Intro() {
    return (
        <div className={styles.container} id="about">
           
            
            <div className={styles.card}>
                

                
               <h1 className={styles.title}>
                  Hi, I&apos;m Megha
                </h1>
                <p className={styles.description}>I&apos;m an engineering student. 
                   <br/> I love to create websites from scratch.
                </p>
                <button className={styles.btn}><Link to="contact" smooth={true}>Contact ME!!</Link></button>

            
            </div>

            <div className={styles.card}>
                <Image className={styles.pic} src="/pic.jpeg" width="170vw" height="170vh" alt="/"></Image>
            </div>

            
            
            
        </div>
    )
}

export default Intro
