import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schemaCadastrarMesa } from '../validation/schemaValidacaoMesa';
import styles from '../styles/cadastrarMesa.module.css';

export default function CadastrarMesa() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schemaCadastrarMesa)
    });

    const handleCadastrarMesa = async (dataForm) => {
        const { codigo, n_lugares } = dataForm;

        const token = localStorage.getItem('authorization');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/mesas/novo`, {
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

            const responseBody = await response.json();

            if (responseBody.error) {
                throw new Error(responseBody.message);
            }

            reset();
            alert(responseBody.message);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>
                Cadastrar Mesas
            </h1>
            <form className={styles.form} onSubmit={handleSubmit(handleCadastrarMesa)}>
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
                    <button className={styles.buttonCadastrarMesa} type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}