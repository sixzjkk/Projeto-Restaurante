import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isLogado, setIsLogado] = useState(false);

    useEffect(() => {
        const verificarLogin = async () => {
            const token = localStorage.getItem('authorization');

            if (token) {
                try {
                    const res = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${token}`
                        }
                    });

                    if (!res.error) {
                        setIsLogado(true);
                    } else {
                        throw new Error(res.message);
                    }

                } catch (err) {
                    setIsLogado(false);
                }
            }
        }

        verificarLogin();
    }, []);

    const scrollHome = () => {
        const element = document.getElementById('home');
        element.scrollIntoView({ behavior: "smooth" });
    }

    const scrollAboutUs = () => {
        const element = document.getElementById('aboutUs');
        element.scrollIntoView({ behavior: "smooth" });
    }

    const scrollReservation = () => {
        const element = document.getElementById('reservation');
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <header>
            <img className={styles.logo} src={logo} />
            <div className={styles.menu}>
                <p className={styles.textMenu} onClick={scrollHome}>Home</p>
                <p className={styles.textMenu} onClick={scrollAboutUs}>Sobre Nós</p>
                <p className={styles.textMenu} onClick={scrollReservation}>Reserve uma Mesa</p>
            </div>
            <div className={styles.auth}>
                {
                    isLogado ?
                        <>
                            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAWRTlPgbJmYTdG6UEyeU9cUlBlHHcpccfDEPuM8PRDSoioEf-fquWcWsyfbLCv-w9Mpv4RbHmzauIabXPWce7uzXiGyvkveXkELLUr0Q' />
                        </>
                        :
                        <>
                            <div className={styles.borderButton}>
                                <Link to='/user/register'><button className={styles.buttonRegister}>Cadastrar</button></Link>
                            </div>
                            <div className={styles.borderButton}>
                                <Link to='/user/login'><button className={styles.buttonLogin}>Login</button></Link>
                            </div>
                        </>

                }
            </div>
        </header>
    );
}