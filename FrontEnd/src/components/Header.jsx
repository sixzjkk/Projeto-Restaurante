import logo from '../assets/logo.png';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';

export default function Header () {

    return (
        <header>
            <img className={styles.logo} src={logo}/>
            <div className={styles.menu}>
                <p className={styles.textMenu}>Home</p>
                <p className={styles.textMenu}>Sobre Nós</p>
                <p className={styles.textMenu}>Reserve uma Mesa</p>
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