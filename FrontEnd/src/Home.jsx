import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Culinary from './components/Culinary';
import Reservation from './components/Reservation';
import styles from './styles/home.module.css';
import img from './assets/image-home.png';

export default function App() {
    return (
        <>
            <Header />
            <div id='home' className={styles.background}>
                <div className={styles.containerPrincipalPrimeiro}>
                    <div className={styles.containerText}>
                        <div className={styles.containerLine}>
                            <div className={styles.line}></div>
                            <p className={styles.textLine}>The Castle</p>
                        </div>
                        <h1 className={styles.textPrincipal}>o bom <strong>Gosto</strong> é <br /><strong>Inimigo</strong> da <br /><strong>Criatividade</strong></h1>
                        <div className={styles.linePrincipalGosto}></div>
                        <div className={styles.linePrincipalCriatividade}></div>
                        <p className={styles.textIntroducao}>Bem-vindo, onde acreditamos que a comida é mais do que <br />
                            apenas sustento: é uma experiência. Nosso cardápio <br />
                            apresenta uma variedade de pratos preparados com <br />
                            maestria, com ingredientes frescos e de origem local,<br />
                            servidos em um ambiente acolhedor e convidativo.</p>
                    </div>
                    <div className={styles.Containerimage}>
                        <div className={styles.degrade}></div>
                        <img className={styles.imageHome} src={img}></img>
                    </div>
                </div>
            <AboutUs />
            <Culinary />
            <Reservation />
            </div>
            <Footer />
        </>
    );
}