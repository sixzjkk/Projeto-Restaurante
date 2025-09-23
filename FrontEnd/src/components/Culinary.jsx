import styles from '../styles/culinary.module.css';
import imgCozinha from '../assets/image-cozinha.png';
import imgClientes from '../assets/image-clientes.png';
import iconReceitas from '../assets/icon-receitas.png';
import iconSino from '../assets/icon-sino.png';
import imgRestaurante from '../assets/image-restaurante.png';

export default function Culinary() {
    return (
        <div className={styles.gridLayout}>
            <img className={styles.cozinhaImage} src={imgCozinha} />

            <div className={styles.clientesImage}>
                <img src={imgClientes} />
            </div>

            <div className={styles.receitasText}>
                <div className={styles.containerReceitasText}>
                    <img className={styles.iconReceitas} src={iconReceitas} />
                    <div className={styles.line}></div>
                    <h2 className={styles.textCulinaria}>
                        Nossas Receitas <br /> de Comida
                    </h2>
                </div>
            </div>

            <div className={styles.paisaoText}>
                <div className={styles.containerReceitasText}>
                    <img className={styles.iconSino} src={iconSino} />
                    <div className={styles.line}></div>
                    <h2 className={styles.textCulinaria}>
                        Cozinhar é uma Questão <br /> de Paixão
                    </h2>
                </div>
            </div>

            <div className={styles.restauranteImage}>
                <img src={imgRestaurante} />
            </div>
        </div>
    );
}
