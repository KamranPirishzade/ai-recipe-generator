import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from "./Login.module.css";
import { useAuth } from '../AuthContext';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      login(); 
      navigate('/'); 
    }
  };

  return (
    <div className="login-container">
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="12345678"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.loginBtn}>Login</button>
        <p>
          If you do not have an account <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

