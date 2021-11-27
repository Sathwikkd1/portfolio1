import styles from "../styles/Education.module.css";
import Image from "next/image";

function Education() {
  return (
      
    
      <div className={styles.container} id="education">
            <h1 className={styles.head}>Education</h1>

            <Image src="/edu.PNG" width="70px" height="50px" alt=""/>
            
            <h2 className={styles.desc}>Electronics and Communication Engineering</h2>
            <p className={styles.name}>Sri Jayachamarajendra College of engineering</p>

              
        </div>
  );
}
export default Education;