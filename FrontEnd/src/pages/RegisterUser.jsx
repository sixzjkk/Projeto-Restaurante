import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bgImg from '../assets/background-fire.png';
import styles from '../styles/auth.module.css';

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/cadastro`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    nome,
                    email,
                    password,
                    confirmPassword
                })
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            localStorage.setItem("authorization", data.token);
            alert(data.message);
            navigate('/');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className={styles.background} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgImg})` }}>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <div className={styles.lineRegister}></div>
            <h1 className={styles.title}>Criar Conta</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input}
                    placeholder='Nome: '
                    type='string'
                    onChange={event => setNome(event.target.value)}
                    value={nome}
                />
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
                <input className={styles.input}
                    placeholder='Confirmar Senha: '
                    type='password'
                    onChange={event => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                />
                <div className={styles.borderButton}>
                    <button className={styles.buttonLoginRegister}>Criar Conta</button>
                </div>
                <p className={styles.textLoginRegister}>Já possui cadastro? <Link className={styles.link} to='/user/login'>Login</Link></p>
            </form>
        </div>
    );
}