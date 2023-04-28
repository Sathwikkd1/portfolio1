import styles from '../styles/card.module.css';

import Image from 'next/image';
import {useState} from 'react'
import React from 'react';
import Link from 'next/link';

import Navbar from '../components/Navbar'

<Navbar/>

function Portfolio  ()  {
    const [modal1,setModal1] = useState(false)
    const [modal2,setModal2] = useState(false)
    const [modal3,setModal3] = useState(false)
    const [modal4,setModal4] = useState(false)
    

    const toggleModal1 = () => {
        setModal1(!modal1)
    };
    const toggleModal2 = () => {
        setModal2(!modal2)
    };
    const toggleModal3 = () => {
        setModal3(!modal3)
    };
    const toggleModal4 = () => {
        setModal4(!modal4)
    };
    return(
     <div className={styles.content} id="portfolio">

         <h1 className={styles.head}>Books</h1>
         <h2 className={styles.subhead}>Department</h2>

         <div className={styles.container}>
        <div className={styles.Card1}>
            <div className={styles.upperContainer}>
                
                    <Image src="/cv.jpg " alt="" height="180px" width="300px"/>
               
                <div className={styles.lowerContainer}>
                    <h3>CSE</h3>
                    <p></p>
                    <button onClick={toggleModal1} className={styles.btn}>View subjects</button>
                </div>
            </div>
         </div>  
         {modal1 && (
              <div className={styles.modal}>
              <div className={styles.overlay}>
                  <div className={styles.modalContent}>
                      <h2>CSE</h2>
                      <p>Computer Science Engineering
                     </p>
                     <button className={styles.closeModal} onClick={toggleModal1} >Close</button>
                  </div>
              </div>
          </div>
         )} 
         <div className={styles.Card1}>
            <div className={styles.upperContainer}>
                
                    <Image src="/js.jpg " alt="" height="180px" width="300px"/>
               
                <div className={styles.lowerContainer}>
                    <h3>ECE</h3>
                    
                    <button onClick={toggleModal2} className={styles.btn}>View more</button>
                </div>
            </div>
         </div>  
         {modal2 && (
              <div className={styles.modal}>
              <div className={styles.overlay}>
                  <div className={styles.modalContent}>
                      <h2>ECE</h2>
                      <p>  Electronics and Communication Engineering
                     </p>
                     <button className={styles.closeModal} onClick={toggleModal2} >Close</button>
                  </div>
              </div>
          </div>
         )} 
         </div>
         <div className={styles.container}>
         <div className={styles.Card1}>
            <div className={styles.upperContainer}>
                
                    <Image src="/ecg.jpg " alt="" height="180px" width="300px"/>
               
                <div className={styles.lowerContainer}>
                    <h3>ISE</h3>
                    <p></p>
                    <button onClick={toggleModal3} className={styles.btn}>View more</button>
                </div>
            </div>
         </div>  
         {modal3 && (
              <div className={styles.modal}>
              <div className={styles.overlay}>
                  <div className={styles.modalContent}>
                      <h2>ISE</h2>
                      <p> Information Science and Engineering
                     </p>
                     <button className={styles.closeModal} onClick={toggleModal3} >Close</button>
                  </div>
              </div>
          </div>
         )} 
         <div className={styles.Card1}>
            <div className={styles.upperContainer}>
                
                    <Image src="/car.jpg " alt="" height="180px" width="300px"/>
               
                <div className={styles.lowerContainer}>
                    <h3>IP</h3>
                    <p> </p>
                    <button onClick={toggleModal4} className={styles.btn}>View more</button>
                </div>
            </div>
         </div>  
         {modal4 && (
              <div className={styles.modal}>
              <div className={styles.overlay}>
                  <div className={styles.modalContent}>
                      <h2>IP</h2>
                      <p>Industrial Production
                     </p>
                     <button className={styles.closeModal} onClick={toggleModal4} >Close</button>
                  </div>
              </div>
          </div>
         )} 
         </div>
         <div className={styles.container}>
        <div className={styles.Card1}>
            <div className={styles.upperContainer}>
                
                    <Image src="/1.jpeg " alt="" height="180px" width="300px"/>
               
                <div className={styles.lowerContainer}>
                    <h3>Card1</h3>
                   <p> redirecting card1.</p>
                   <Link href='/page1'><button  className={styles.btn}>View more</button></Link>
                </div>
            </div>
         </div>  
        
         <div className={styles.Card1}>
            <div className={styles.upperContainer}>
                
                    <Image src="/2.jpg " alt="" height="180px" width="300px"/>
               
                <div className={styles.lowerContainer}>
                    <h3>CARD 2</h3>
                    <p> redirecting card2.</p>
                   
                    <Link href='/page2'><button  className={styles.btn}>View more</button></Link>
                </div>
            </div>
         </div>  
         
         </div>
            </div>)}

     

export default Portfolio;

