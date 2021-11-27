import styles from '/styles/Footer.module.css';
import Link from 'next/link';

import Image from 'next/image';

function Footer() {
    return (
        <div className={styles.container} id="footer">
            <div className={styles.carL}>
                <h2 className={styles.title}>MEGHA</h2>

                <Link href="" passHref>
                <h1 className={styles.linktitle}>
                    <span>CONTACT ME</span>
                    
                </h1>
                </Link>

            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    Mysuru, Karnataka <br/> India
                </div>
                <div className={styles.cardItem}>
                    <Link href="/" passHref >contact@gmail.com</Link> 
                </div>
            </div>
            <div className={styles.carS}>
            <div className={styles.cardItem}>
                  
                  <Link href="https://www.instagram.com" passHref>
                      <div className={styles.icon}>
                   <Image   width="20px" height="20px" src='/insta.PNG' alt="" /></div>
               </Link>

               <Link href="https://www.facebook.com" passHref>
                   <div className={styles.icon}>
                   <Image  width="20px" height="20px" src='/fb.PNG'alt="" /></div>
               </Link>

               <Link href="https://github.com/" passHref>
                   <div className={styles.icon}>
                   <Image   width="20px" height="20px" src='/git.PNG' alt="" /></div>
               </Link>
                  
                </div>
                <div className={styles.cardItem}>
                © Megha <br/>All rights reserved 
                </div>
            
            </div>
        </div>
    )
}

export default Footer


