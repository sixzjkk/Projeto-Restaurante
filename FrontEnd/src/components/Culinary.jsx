import { Link } from 'react-router-dom';
import styles from '../styles/culinary.module.css';
import imgCozinha from '../assets/image-cozinha.png';
import imgClientes from '../assets/image-clientes.png';
import iconReceitas from '../assets/icon-receitas.png';
import iconSino from '../assets/icon-sino.png';
import imgRestaurante from '../assets/image-restaurante.png';

export default function App() {
    return (
        <div className={styles.parent}>
            <img className={styles.div1} src={imgCozinha} />

            <div className={styles.div2}>
                <img className={styles.imageCLientes} src={imgClientes} />
            </div>

            <div className={styles.div3}>
                <div className={styles.containerReceitasText}>
                    <img className={styles.iconReceitas} src={iconReceitas} />
                    <div className={styles.line}></div>
                    <h2 className={styles.textCulinaria}>
                        Nossas Receitas <br /> de Comida
                    </h2>
                </div>
            </div>

            <div className={styles.div4}>
                <div className={styles.containerReceitasText}>
                    <img className={styles.iconSino} src={iconSino} />
                    <div className={styles.line}></div>
                    <h2 className={styles.textCulinaria}>
                        Cozinhar é uma Questão <br /> de Paixão
                    </h2>
                </div>
            </div>

            <div className={styles.div5}>
                <img className={styles.imageRestaurante} src={imgRestaurante} />
            </div>
        </div>
    );
}
