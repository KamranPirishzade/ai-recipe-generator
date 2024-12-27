import React, { useState } from 'react'
import styles from "./Footer.module.css"
import {FaFacebook} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";





export default function Footer() {
  const [email,setEmail]=useState("")

  return (
    <footer>
    <div className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerObject}>
                <h2 className={styles.logoName}>Muse Ai Recipe</h2>
                {/* <img src="https://livedemo00.template-help.com/wordpress_47529/wp-content/uploads/2011/07/logo-mini.png" alt="logo.png" /> */}
                <div className={styles.icons}>
                  <a href='https://www.instagram.com/'><FaFacebook size={30}/></a>
                  <a href='https://www.facebook.com/'><FaInstagram size={30}/></a>
                  <a href='https://x.com/'><FaXTwitter size={30}/></a>
                </div>
            </div>
            <div  className={`${styles.footerObject} ${styles.footerObject2}`}>
                <h3>Contact us</h3>
                <ul>  
                    <li>+944 55 627 62 62</li>
                    <li>museai@recipe.co</li>
                    <li>Baku, Azerbaijan</li>
                </ul>
            </div>
            <div  className={`${styles.footerObject} ${styles.footerObject3}`}>
                <h3>Main Pages</h3>
                <ul className={styles.pages}>  
    =               <li><Link to="/">Home</Link></li>
                    <li><Link to="/meals">Meals</Link></li>
                    <li><Link to="/ai-recipe-maker">AI Recipe</Link></li>
                </ul>
            </div>
            <div  className={styles.footerObject}>
                <h3>Subscribe</h3>
                <p>Enter your email to get notified about our new solutions</p>
                <form onSubmit={(e)=>{
                  e.preventDefault();
                  console.log(email);
                  setEmail("");
                }} className={styles.submitForm}>
                    <input type='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <button type='submit'><CiMail size={30}/></button>
                </form>
            </div>
        </div>
        <hr></hr>
        <p className={styles.copyright}>&copy; 2024 Muse. All rights reserved.</p>
    </div>
    </footer>
  )
}
