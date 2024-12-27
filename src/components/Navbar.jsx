import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"


export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/meals">Meals</Link></li>
          <li><Link to="/ai-recipe-maker">AI recipe</Link></li>
        </ul>
        <div className={styles.logo}>
          <Link to="/"><img className={styles.logoImg} src="https://livedemo00.template-help.com/wordpress_47529/wp-content/themes/theme47529/images/logo.png" alt="Muse Logo"/></Link>
        </div>
        <ul>
          <li><Link to="/list">My List</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          
        </ul>
    </nav>
    </div>  
  )
}
