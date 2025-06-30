import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';
import { useAuth } from '../AuthContext';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            login();
            navigate('/');
        }
    };

    return (
        <div className='sign-up-container'>
            <form className={styles.signUpForm} onSubmit={handleSubmit}>
                <label htmlFor="name">Name and Surname</label>
                <input type="text" id='name' placeholder='John Doe' />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='johndoe@example.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='12345678'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <button type='submit' className={styles.signUpBtn}>Sign up</button>

                <p>If you already have an account <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;