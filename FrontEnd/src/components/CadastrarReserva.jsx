import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCadastrarReserva } from '../validation/schemaValidacaoReserva';
import bgImg from '../assets/background-fire.png';
import styles from '../styles/cadastrarReserva.module.css';

export default function CadastrarReserva() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schemaCadastrarReserva)
    });
    const [mesas, setMesas] = useState();

    const handleCadastrarReserva = async (formData) => {
        const { mesa_id, contato, dataReserva, horarioReserva, n_pessoas } = formData;

        try {
            const token = localStorage.getItem('authorization');

            const res = await fetch(`${import.meta.env.VITE_API_URL}/reservas/novo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    mesa_id,
                    contato,
                    data: dataReserva,
                    horario: horarioReserva,
                    n_pessoas
                })
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            alert(data.message);
        } catch (err) {
            alert(err);
        }
    }

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
        return <h2>Carregando...</h2>;
    }

    const mesaSelecionada = mesas.find(
        (m) => m.id === Number(watch('mesa_id'))
    );

    return (
        <div id='cadastrarReserva' className={styles.background} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgImg})` }}>
            <div className={styles.line}></div>
            <h1 className={styles.titleReservation}>Reserve uma mesa</h1>
            <form className={styles.form} onSubmit={handleSubmit(handleCadastrarReserva)}>
                <div className={styles.errors}>
                    <div className={styles.selectWrapper}>
                        <select className={styles.input}
                            {...register('mesa_id', { required: true })}
                        >
                            {
                                mesas.map((mesa) =>
                                    <option key={mesa.id} value={mesa.id}>
                                        Mesa {mesa.id}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                    <div className={styles.error}>{errors.mesa_id?.message}</div>
                </div>

                <div className={styles.errors}>
                    <div className={styles.select}>
                        <input className={styles.input}
                            {...register('contato', { required: true })}
                            placeholder='(11) 99999-9999'
                        />
                    </div>
                    <div className={styles.error}>{errors.contato?.message}</div>
                </div>

                <div className={styles.errors}>
                    <div className={styles.selectWrapperDate}>
                        <input className={styles.input}
                            {...register('dataReserva', { required: true })}
                            type='date'
                        />
                    </div>
                    <div className={styles.error}>{errors.dataReserva?.message}</div>
                </div>

                <div className={styles.errors}>
                    <div className={styles.selectWrapper}>
                        <input className={styles.input}
                            {...register('horarioReserva', { required: true })}
                            type='time'
                        />
                    </div>
                    <div className={styles.error}>{errors.horarioReserva?.message}</div>
                </div>

                <div className={styles.errors}>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.input}
                            {...register('n_pessoas', { required: true })}
                        >
                            {mesaSelecionada &&
                                Array.from({ length: mesaSelecionada.n_lugares }).map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1} pessoa{i > 0 ? 's' : ''}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={styles.error}>{errors.n_pessoas?.message}</div>
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

