import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bgImg from '../assets/background-fire.png';
import styles from '../styles/auth.module.css';

export default function LoginUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            localStorage.setItem("Authorization", data.token);
            alert(data.message);
            navigate('/');
        } catch (err) {
            alert(err);
        }
    }


    return (
        <div className={styles.background} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgImg})` }}>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <div className={styles.line}></div>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input}
                    placeholder='E-mail: '
                    type='email'
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
                <input className={styles.input}
                    placeholder='Senha: '
                    type='password'
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
                <div className={styles.borderButton}>
                    <button className={styles.buttonLoginRegister}>Login</button>
                </div>
                <p className={styles.textLoginRegister}>Não possui cadastro? <Link className={styles.link} to='/user/register'>Criar conta</Link></p>
            </form>
        </div>
    );
}