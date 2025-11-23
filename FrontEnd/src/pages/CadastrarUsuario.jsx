import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import bgImg from '../assets/background-fire.png';
import styles from '../styles/auth.module.css';

export default function CadastrarUsuario() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const handleCadastrar = async (data) => {
        const { nome, sobrenome, email, senha, uf, cidade, bairro, rua, numeroCasa } = data;
        
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/cadastro`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    email,
                    senha,
                    uf,
                    cidade,
                    bairro,
                    rua,
                    numeroCasa
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
            <div className={styles.lineRegister}></div>
            <h1 className={styles.title}>Criar Conta</h1>
            <form className={styles.form} onSubmit={handleSubmit(handleCadastrar)}>
                <input className={styles.input}
                    {...register('nome', { required: true })}
                    placeholder='Nome: '
                />
                <input className={styles.input}
                    {...register('sobrenome', { required: true })}
                    placeholder='Sobrenome: '
                />
                <input className={styles.input}
                    {...register('email', { required: true })}
                    placeholder='E-mail: '
                />
                <input className={styles.input}
                    {...register('senha', { required: true })}
                    placeholder='Senha: '
                />
                <input className={styles.input}
                    {...register('uf', { required: true })}
                    placeholder='UF: '
                />
                <input className={styles.input}
                    {...register('cidade', { required: true })}
                    placeholder='Cidade: '
                />
                <input className={styles.input}
                    {...register('bairro', { required: true })}
                    placeholder='Bairro: '
                />
                <input className={styles.input}
                    {...register('rua', { required: true })}
                    placeholder='Rua: '
                />
                <input className={styles.input}
                    {...register('numeroCasa', { required: true })}
                    placeholder='Nº: '
                />
                <div className={styles.borderButton}>
                    <button className={styles.buttonLoginRegister} type='submit'>Criar Conta</button>
                </div>
                <p className={styles.textLoginRegister}>Já possui cadastro? <Link className={styles.link} to='/user/login'>Login</Link></p>
            </form>
        </div>
    );
}