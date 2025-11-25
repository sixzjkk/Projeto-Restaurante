import styles from '../styles/reservation.module.css';
import bgImg from '../assets/background-fire.png';


export default function Reservation() {
    return (
        <div id='reservation' className={styles.background} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgImg})` }}>
            <div className={styles.line}></div>
            <h1 className={styles.titleReservation}>Reserve uma mesa</h1>
            <form className={styles.form}>
                <div className={styles.selectWrapper}>
                    <select className={styles.input}>
                        <option value=''>Pessoas</option>
                        <option value='1'>1 Pessoa</option>
                        <option value='2'>2 Pessoas</option>
                        <option value='3'>3 Pessoas</option>
                        <option value='4'>4 Pessoas</option>
                        <option value='5'>5 Pessoas</option>
                        <option value='6'>6 Pessoas</option>
                        <option value='7'>7 Pessoas</option>
                        <option value='8'>8 Pessoas</option>
                        <option value='9'>9 Pessoas</option>
                        <option value='10'>10 Pessoas</option>
                    </select>
                </div>

                <div className={styles.selectWrapperDate}>
                    <input
                        className={styles.input}
                        type='date'
                    />
                </div>

                <div className={styles.selectWrapper}>
                    <select className={styles.input}>
                        <option value='18:00'>18:00</option>
                        <option value='18:30'>18:30</option>
                        <option value='19:00'>19:00</option>
                        <option value='19:00'>19:30</option>
                        <option value='20:00'>20:00</option>
                        <option value='20:30'>20:30</option>
                        <option value='21:00'>21:00</option>
                        <option value='21:30'>21:30</option>
                        <option value='22:00'>22:00</option>
                        <option value='22:30'>22:30</option>
                        <option value='23:00'>23:00</option>
                        <option value='23:30'>23:30</option>
                    </select>
                </div>

                <div className={styles.borderButton}>
                    <button type='submit' className={styles.buttonReservation}>
                        Reservar
                    </button>
                </div>
            </form>

        </div>
    );
}