import styles from '../styles/buscarMesas.module.css';
import imgStar from '../assets/image-star.png';
import { useState, useEffect } from 'react';

export default function BuscarMesas() {
    const [mesas, setMesas] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/mesas`);
                const data = await res.json();
                setMesas(data.mesas);
            } catch (err) {
                console.log(err);
            }
        };

        buscar();
    }, []);

    if (!mesas) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <div id='buscarMesas' className={styles.containerPrincipalQuarto}>
                <h1 className={styles.titleBuscarMesas}>Consultar Mesas</h1>
                <div className={styles.containerBuscarMesas}>
                    <div className={styles.containerTextBuscarMesas}>
                        <h2 className={styles.subtitleBuscarMesas}>Consultar Mesas</h2>
                        <img className={styles.imageStar} src={imgStar} />

                        <table>
                            <tbody>
                                {mesas.map(mesa => (
                                    <tr className={styles.listaMesas} key={mesa.id}>
                                        <td className={styles.mesas}>MESA {mesa.id}</td>
                                        <td className={styles.mesas}>CÓDIGO {mesa.codigo}</td>
                                        <td className={styles.mesas}>{mesa.n_lugares} LUGARES</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
}