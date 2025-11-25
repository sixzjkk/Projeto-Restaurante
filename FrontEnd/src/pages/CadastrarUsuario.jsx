import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schemaValidacaoUsuario from '../validation/schemaValidacaoUsuario';
import { useNavigate, Link } from 'react-router-dom';
import bgImg from '../assets/background-fire.png';
import styles from '../styles/auth.module.css';

export default function CadastrarUsuario() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaValidacaoUsuario)
    });

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

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            localStorage.setItem('authorization', data.token);
            alert(data.message);
            navigate('/');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className={styles.background} style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgImg})`
        }}>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <div className={styles.lineRegister}></div>
            <h1 className={styles.title}>Criar Conta</h1>

            <form className={styles.form} onSubmit={handleSubmit(handleCadastrar)}>

                <div className={styles.row}>
                    <input className={styles.input}
                        {...register('nome')}
                        placeholder='Nome:' />
                    <input className={styles.input}
                        {...register('sobrenome')}
                        placeholder='Sobrenome:' />
                </div>
                <div className={styles.errors}>
                    <div className={styles.error}>{errors.nome?.message}</div>
                    <div id={styles.errorColumn} className={styles.error}>{errors.sobrenome?.message}</div>
                </div>

                <input className={styles.input}
                    {...register('email')}
                    placeholder='E-mail:' />
                <div className={styles.error}>{errors.email?.message}</div>

                <input className={styles.input}
                    {...register('senha')}
                    placeholder='Senha:' />
                <div className={styles.error}>{errors.senha?.message}</div>

                <div className={styles.row}>
                    <input className={styles.input}
                        {...register('uf')}
                        placeholder='UF:' />
                    <input className={styles.input}
                        {...register('cidade')}
                        placeholder='Cidade:' />
                </div>
                <div className={styles.errors}>
                    <div className={styles.error}>{errors.uf?.message}</div>
                    <div id={styles.errorColumn} className={styles.error}>{errors.cidade?.message}</div>
                </div>

                <div className={styles.row}>
                    <input className={styles.input}
                        {...register('bairro')}
                        placeholder='Bairro:' />

                    <input className={styles.input}
                        {...register('rua')}
                        placeholder='Rua:' />
                </div>
                <div className={styles.errors}>
                    <div className={styles.error}>{errors.bairro?.message}</div>
                    <div id={styles.errorColumn} className={styles.error}>{errors.rua?.message}</div>
                </div>

                <input className={styles.input}
                    {...register('numeroCasa')}
                    placeholder='Nº:' />
                <div className={styles.error}>{errors.numeroCasa?.message}</div>

                <div className={styles.borderButton}>
                    <button className={styles.buttonLoginRegister} type='submit'>
                        Criar Conta
                    </button>
                </div>

                <p className={styles.textLoginRegister}>
                    Já possui cadastro? <Link className={styles.link} to='/user/login'>Login</Link>
                </p>
            </form>
        </div>
    );
}