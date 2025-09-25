import logo from '../assets/logo.png';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';

export default function Header () {
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
            <img className={styles.logo} src={logo}/>
            <div className={styles.menu}>
                <p className={styles.textMenu} onClick={scrollHome}>Home</p>
                <p className={styles.textMenu} onClick={scrollAboutUs}>Sobre Nós</p>
                <p className={styles.textMenu} onClick={scrollReservation}>Reserve uma Mesa</p>
            </div>
            <div className={styles.auth}>
                <div className={styles.borderButton}>
                    <button className={styles.buttonRegister}><Link to='/user/register'>Cadastrar</Link></button>
                </div>
                 <div className={styles.borderButton}>
                    <button className={styles.buttonLogin}><Link to='/user/login'>Login</Link></button>
                </div>
            </div>
        </header>
    );
}