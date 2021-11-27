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
        <div className={styles.container} id="contact">
           <h1 className={styles.title}>GET IN TOUCH </h1>
           <form className={styles.form} onSubmit={sendEmail}>
               <input className={styles.inputS} name="Username"placeholder="Username"/>
               <input className={styles.inputS} name="Phone" placeholder="Phone"/>
               <input className={styles.inputL} name="Email" placeholder="Email"/>
               <input className={styles.inputL} name="Subject" placeholder="Subject"/>
               <textarea className={styles.textarea} placeholder="Message" row={6} />
               <button className={styles.btn}>SUBMIT</button> 
           </form>
        </div>
    )
}

export default Contact
