import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLoginUsuario } from '../validation/schemaValidacaoUsuario';
import bgImg from '../assets/background-fire.png';
import styles from '../styles/auth.module.css';

export default function LoginUsuario() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaLoginUsuario)
    });

    const navigate = useNavigate();

    const handleLoginUsuario = async (dataForm) => {
        const { email, senha } = dataForm;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    senha
                })
            });

            const responseBody = await res.json();

            if (responseBody.error) {
                throw new Error(responseBody.message);
            }

            localStorage.setItem('authorization', responseBody.token);
            alert(responseBody.message);
            navigate('/');
        } catch (err) {
            alert(err);
        }
    }


    return (
        <div className={styles.background} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgImg})` }}>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <div className={styles.line}></div>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit(handleLoginUsuario)}>
                <input className={styles.input}
                    {...register('email', { required: true })}
                    placeholder='E-mail: '
                />
                <div className={styles.error}>{errors.email?.message}</div>
                <input className={styles.input}
                    {...register('senha', { required: true })}
                    placeholder='Senha: '
                />
                <div className={styles.error}>{errors.senha?.message}</div>
                <div className={styles.borderButton}>
                    <button className={styles.buttonLoginRegister} type='submit'>Login</button>
                </div>
                <p className={styles.textLoginRegister}>Não possui cadastro? <Link className={styles.link} to='/user/register'>Criar conta</Link></p>
            </form>
        </div>
    );
}