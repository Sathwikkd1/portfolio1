import styles from '../styles/project.module.css';
import Link from 'next/link';
import Image from 'next/image';





function Portfolio  ()  {
    return(
     <div className={styles.container} id="portfolio">

         <h1 className={styles.head}>Portfolio</h1>
         <h2 className={styles.subhead}>My Projects</h2>

         <div className={styles.card1}>
         
            <div className={styles.card2}>
            
                <Image
                    
                    src="/cv.jpg"
                  alt="Air canvas"
                  height="300px"
                  width="550px"
                    
                     
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.title}>
                    <Link href="/">AIR CANVAS</Link>
                </div>
                <p className={styles.desc}>
                    A computer vision project.<br/>
                    It can draw anything by capturing the motion of the finger tip
                </p>

            </div>

            </div>
            <div className={styles.card1}>
         
            <div className={styles.card2}>
            
                    <Image
                    
                    src="/js.jpg"
                    alt="Code Player"
                    height="300px"
                    width="550px"
                   
                     
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.title}>
                <Link href="/">CODE PLAYER</Link>
                </div>
                <p className={styles.desc}>
               It helps to test snippets of  javascript and css code, 
               within some context, and debug the code collaboratively.
               </p>

            </div>

            </div>

            <div className={styles.card1}>
         
            <div className={styles.card2}>
            
                    <Image
                    
                    src="/ecg.jpg"
                    alt="Health monitoring"
                    height="300px"
                    width="550px"
                    
                     
                />
            </div>
            <div className={styles.overlay}>
                <div className={styles.title}>
                    <Link href="/">HEALTH MONITORING SYSTEM</Link>
            
                </div>
                <p className={styles.desc}>
                    Arduino based health monitoring system.
                </p>

            </div>

            </div>

            <div className={styles.card1}>
         
                <div className={'styles.card2'}>
            
                    <Image
                   
                    src="/car.jpg"
                    alt="Car"
                   
                   height="300px"
                   width="550px"
                   
                    
                     
                    />
                </div>
                <div className={styles.overlay}>
                    <div className={styles.title}>
                        <Link href="/">Mobile Controlled CAR</Link>
                    </div>
                    <p className={styles.desc}>
                        DTMF based mobile controlled robotic car.
                    </p>

                </div>

                </div>

                <div className={styles.card3}>
            
                <Image
                    
                    src="/cv.jpg"
                  alt="Air canvas"
                  height="150px"
                  width="250px"
                    
                     
                />
            </div>
            <div className={styles.card3}>
            
                <Image
                    
                    src="/js.jpg"
                  alt="Air canvas"
                  height="150px"
                  width="250px"
                    
                     
                />
            </div>
            <div className={styles.card3}>
            
                <Image
                    
                    src="/ecg.jpg"
                  alt="health"
                  height="150x"
                  width="250px"
                    
                     
                />
            </div>
            <div className={styles.card3}>
            
                <Image
                    
                    src="/car.jpg"
                  alt="robot"
                  height="150px"
                  width="250px"
                    
                     
                />
            </div>
            </div>)}

          

export default Portfolio;