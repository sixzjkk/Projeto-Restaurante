import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import iconUser from '../assets/icon-user.png';
import styles from '../styles/userPerfil.module.css';

export default function PerfilUsuario() {
    const { register, handleSubmit, reset, watch } = useForm();
    const [editando, setEditando] = useState(false);
    const [carregando, setCarregando] = useState(true);

    const navigate = useNavigate();

    const handleAtualizar = async (data) => {
        const { nome, sobrenome, email, uf, cidade, bairro, rua, numeroCasa } = data;

        try {
            const token = localStorage.getItem('authorization');

            const res = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    email,
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

            alert(data.message);
        } catch (err) {
            alert(err);
        }

        setEditando(false);
    }

    useEffect(() => {
        const buscarPerfil = async () => {
            try {
                const token = localStorage.getItem('authorization');

                const res = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, {
                    headers: { 'authorization': `Bearer ${token}` }
                });

                const data = await res.json();

                if (data.error) {
                    throw new Error(data.message);
                }

                reset(data.usuario);
                setCarregando(false);
            } catch (err) {
                alert(err);
                localStorage.removeItem('authorization');
                navigate('/user/login');
            }
        };

        buscarPerfil();
    }, []);

    if (carregando) {
        return <h2>Carregando...</h2>;
    }

    return (
        <div>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <div className={styles.infoPerfil}>
                <img src={iconUser} />
                <div>
                    {
                        editando ?
                            <form className={styles.infoEditar} onSubmit={handleSubmit(handleAtualizar)}>
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
                                    <button className={styles.buttonEditarSalvar} type='submit'>Salvar</button>
                                </div>
                            </form>
                            :
                            <>
                                <p className={styles.nomeUsuario}>{watch('nome')}</p>
                                <p className={styles.emailUsuario}>{watch('sobrenome')}</p>
                                <p className={styles.emailUsuario}>{watch('email')}</p>
                                <p className={styles.emailUsuario}>{watch('uf')}</p>
                                <p className={styles.emailUsuario}>{watch('cidade')}</p>
                                <p className={styles.emailUsuario}>{watch('bairro')}</p>
                                <p className={styles.emailUsuario}>{watch('rua')}</p>
                                <p className={styles.emailUsuario}>{watch('numeroCasa')}</p>
                                <div className={styles.borderButton}>
                                    <button className={styles.buttonEditar} onClick={() => setEditando(true)}>Editar</button>
                                </div>
                            </>
                    }
                    <p className={styles.tipoUsuario}>{watch('tipo').toUpperCase()[0] + watch('tipo').slice(1)}</p>
                    <div className={styles.borderButton}>
                        <button className={styles.buttonEditar}

                            onClick={() => {
                                localStorage.setItem('authorization', '');
                                navigate('/');
                            }}>
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}