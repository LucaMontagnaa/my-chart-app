import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'

const LoginModal = ({ isOpen, closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add authentication logic here
        console.log('Login with email:', email, 'and password:', password);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={closeModal}>
                    &times;
                </button>
                <form onSubmit={handleSubmit}>
                    <label>Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;