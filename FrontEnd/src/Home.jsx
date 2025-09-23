import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import styles from './styles/home.module.css';
import img from './assets/image-home.png';
import imgChef from './assets/image-chef.png';
import imgStar from './assets/image-star.png';
import imgChefCozinha from './assets/image-chefCozinha.png';

export default function App() {
    return (
        <>
            <Header />
            <div className={styles.background}>
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
                <div className={styles.containerPrincipalSegundo}>
                    <h1 className={styles.titleAboutUs}>Sobre Nós</h1>
                    <div className={styles.containerAboutUs}>
                        <img className={styles.imageChef} src={imgChef}></img>
                        <div className={styles.containerTextAboutUs}>
                            <h2 className={styles.subtitleAboutUs}>Sobre nós</h2>
                            <img className={styles.imageStar} src={imgStar}></img>
                            <p className={styles.textAboutUs}>Somos uma empresa familiar que <br />
                                serve comidas deliciosas à nossa <br />
                                comunidade local há 5 anos. Nossa <br />
                                paixão pela alta gastronomia só se <br />
                                compara à nossa dedicação em <br />
                                oferecer um serviço excepcional a <br />
                                cada cliente que entra em nosso <br />
                                estabelecimento. <br />
                                Acreditamos que cada prato deve <br />
                                ser um banquete para os sentidos. É <br />
                                por isso que nossos chefs se <br />
                                comprometem a usar apenas os <br />
                                ingredientes mais frescos e de <br />
                                origem local, elaborando cada <br />
                                prato com cuidado e precisão.</p>
                        </div>
                        <img className={styles.imageChefCozinha} src={imgChefCozinha}></img>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}