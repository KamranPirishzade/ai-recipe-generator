import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../AuthContext';

export default function Navbar() {
   const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="navbar">
      <nav>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/meals">Meals</Link></li>
          <li><Link to="/ai-recipe-maker">AI recipe</Link></li>
        </ul>
        <div className={styles.logo}>
          <Link to="/"><img className={styles.logoImg} src={`${process.env.PUBLIC_URL}/imgs/logo.png`} alt="Muse Logo" /></Link>
        </div>
        <ul>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          {!isLoggedIn ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/list">My List</Link></li>
              <li><Link to="/" onClick={()=>logout()}>Logout</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}