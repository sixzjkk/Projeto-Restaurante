import styles from '../styles/aboutus.module.css';
import imgChef from '../assets/image-chef.png';
import imgStar from '../assets/image-star.png';
import imgChefCozinha from '../assets/image-chefCozinha.png';

export default function AboutUs() {
    return (
        <div id='aboutUs' className={styles.containerPrincipalSegundo}>
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
    );
}