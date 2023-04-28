import styles from "../styles/Education.module.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "reactstrap";

function Education() {
  return (
      
    
      <div className={styles.container} id="education">
            <h1 className={styles.head}>SignUp</h1>
             <Button color="primary" type="button">
                <Link href="/books" passref>Signup</Link>
             </Button>

            
            
            

              
        </div>
  );
}
export default Education;
