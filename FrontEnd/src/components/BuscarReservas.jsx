import styles from '../styles/buscarReservas.module.css';

export default function BuscarReservas({ reservas }) {


    return (
        <div className={styles.containerReservas}>
            <h1 className={styles.titulo}>Minhas reservas</h1>
            <table>
                {reservas.map(reserva =>
                    <tr className={styles.tabelaReserva} key={reserva.id}>
                        <td className={styles.textoDataReserva}>{reserva.data.split('T')[0]}</td>
                        <div className={styles.mesaeReserva}>
                            <td className={styles.textoReserva}>Mesa {reserva.mesa_id}</td>
                            <p className={styles.textoDivisao}>-</p>
                            <td className={styles.textoReserva}>Reserva {reserva.id}</td>
                        </div>
                    </tr>
                )}
            </table>
        </div>
    );
}