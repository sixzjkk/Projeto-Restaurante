import styles from '../styles/cardapio.module.css';
import { useNavigate, Link } from 'react-router-dom';

export default function Cardapio() {
    return (
        <div className={styles.containerCardapio}>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <h1 className={styles.titleCardapio}>Cardápio</h1>
            <div className={styles.prato}>
                <h2 className={styles.titlePrato}>Salmone Vino Bianco Pomodori</h2>
                <p className={styles.descricaoPrato}>Filé de salmão com bacon, aspargos, tomates cerejas e molho de vinho branco</p>
                <h2 className={styles.precoPrato}>R$ 420,00</h2>
            </div>
            <div className={styles.prato}>
                <h2 className={styles.titlePrato}>Risotto Di mare</h2>
                <p className={styles.descricaoPrato}>Risoto com frutos do mar</p>
                <h2 className={styles.precoPrato}>R$ 300,00</h2>
            </div>
            <div className={styles.prato}>
                <h2 className={styles.titlePrato}>Taglitia Rucola E Parmigiano</h2>
                <p className={styles.descricaoPrato}>Bife de contrafilé grelhado com rúcula e queijo parmesão</p>
                <h2 className={styles.precoPrato}>R$ 450,00</h2>
            </div>
        </div>
    );
}