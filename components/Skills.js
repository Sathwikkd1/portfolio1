import styles from "../styles/Skills.module.css";

function Skills() {
  return (
      
    
      <div className={styles.container} id="skills">
        <h1 className={styles.head}>My Skills</h1>
           <ul className={styles.list}>
               <li className={styles.listItems}>
                   <h3>HTML</h3>
                   <span className={styles.bar}>
                       <span className={styles.html}></span>
                    </span>
               </li>
               <li className={styles.listItems}>
                   <h3>CSS</h3>
                   <span className={styles.bar}>
                       <span className={styles.css}></span>
                    </span>
               </li>
               <li className={styles.listItems}>
                  <h3>JAVASCRIPT</h3>
                  <span className={styles.bar}>
                      <span className={styles.Javascript}></span>
                    </span>
               </li>
               <li className={styles.listItems}>
                   <h3>JQUERY</h3>
                   <span className={styles.bar}>
                       <span className={styles.jQuery}></span>
                    </span>
               </li>

               <li className={styles.listItems}>
                   <h3>BOOTSTRAP</h3>
                   <span className={styles.bar}>
                       <span className={styles.bootstrap}></span>
                    </span>
               </li>
           </ul>
        </div>


      

          


      
    
  );
}
export default Skills;
