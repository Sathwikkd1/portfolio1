import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styles from '../styles/scroll.module.css';
import { Button} from 'react-bootstrap' 
export const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    
    if (window.pageYOffset > 300){
      setVisible(true)
    } 
    else {
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  useEffect(() =>{
    window.addEventListener('scroll', toggleVisible);

    return() =>{
        window.removeEventListener('scroll', toggleVisible);
    }
  }, []);
  
  
  return (

    <div className={styles.container}>
    <Button>
     <FaArrowCircleUp onClick={scrollToTop} className={styles.btn}/>
    </Button></div>
  );
}
  
export default ScrollButton;