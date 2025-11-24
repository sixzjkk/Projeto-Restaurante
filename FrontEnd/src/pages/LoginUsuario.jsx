import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import bgImg from '../assets/background-fire.png';
import styles from '../styles/auth.module.css';

export default function LoginUsuario() {
    const { register, handleSubmit, formState: { error } } = useForm();

    const navigate = useNavigate();

    const handleLogin = async (data) => {
        const { email, senha } = data;
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    senha
                })
            });
            
            console.log(res)

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            localStorage.setItem("authorization", data.token);
            alert(data.message);
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
            <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
                <input className={styles.input}
                    {...register('email', { required: true })}
                    placeholder='E-mail: '
                />
                <input className={styles.input}
                    {...register('senha', { required: true })}
                    placeholder='Senha: '
                />
                <div className={styles.borderButton}>
                    <button className={styles.buttonLoginRegister} type='submit'>Login</button>
                </div>
                <p className={styles.textLoginRegister}>Não possui cadastro? <Link className={styles.link} to='/user/register'>Criar conta</Link></p>
            </form>
        </div>
    );
}