import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schemaCadastrarMesa } from '../validation/schemaValidacaoMesa';
import styles from '../styles/cadastrarMesa.module.css';

export default function CadastrarMesa() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schemaCadastrarMesa)
    });

    const handleCadastrarMesa = async (data) => {
        const { codigo, n_lugares } = data;

        const token = localStorage.getItem('authorization');

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/mesas/novo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    codigo,
                    n_lugares
                })
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            reset();
            alert(data.message);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>
                Cadastrar Mesas
            </h1>
            <form className={styles.form}>
                <input className={styles.input}
                    {...register('codigo')}
                    placeholder='Código: '
                />
                <div className={styles.error}>{errors.codigo?.message}</div>
                <input className={styles.input}
                    {...register('n_lugares')}
                    placeholder='Capacidade: '
                />
                <div className={styles.error}>{errors.n_lugares?.message}</div>
                <div className={styles.borderButton}>
                    <button className={styles.buttonCadastrarMesa} onClick={handleSubmit(handleCadastrarMesa)}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}