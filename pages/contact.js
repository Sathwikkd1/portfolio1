import styles from '../styles/contact.module.css'
import emailjs from 'emailjs-com';

function Contact() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_bzugg76','template_ky9d52v', e.target,"user_6xNrHI7zF6BYxUYcoaoDi").then(res=>{
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className={styles.container} id="Login">
 
               <h1>Login</h1>
               <input className={styles.inputS} name="Userna"placeholder="Username"/>
               <input className={styles.inputS} name="Password"placeholder="Password"/>
               
               
               <button className={styles.btn}>Login</button> 
     
        </div>
    )
}

export default Contact
