import BuscarReservas from '../components/BuscarReservas';
import CadastrarMesa from '../components/CadastrarMesa';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import iconUser from '../assets/icon-user.png';
import styles from '../styles/userPerfil.module.css';

export default function PerfilUsuario() {
    const { register, handleSubmit, reset, watch } = useForm();
    const [isAdm, setIsAdm] = useState(false);
    const [editando, setEditando] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const [reservas, setReservas] = useState([]);

    const navigate = useNavigate();

    const handleAtualizarUsuario = async (dataForm) => {
        const { nome, sobrenome, email, uf, cidade, bairro, rua, numeroCasa } = dataForm;

        try {
            const token = localStorage.getItem('authorization');

            const response = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, {
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

            const responseBody = await response.json();

            if (responseBody.error) {
                throw new Error(responseBody.message);
            }

            alert(responseBody.message);
        } catch (err) {
            alert(err);
        }

        setEditando(false);
    }

    useEffect(() => {
        const buscarPerfil = async () => {
            try {
                const token = localStorage.getItem('authorization');

                const response = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, {
                    headers: { 'authorization': `Bearer ${token}` }
                });

                const responseBody = await response.json();

                if (responseBody.error) {
                    throw new Error(responseBody.message);
                }

                if (responseBody.usuario.tipo == 'adm') {
                    setIsAdm(true);
                }

                reset(responseBody.usuario);
                setReservas(responseBody.usuario.reservas);
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
        <div className={styles.container}>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <div className={styles.infoPerfil}>
                <img src={iconUser} />
                <div>
                    {
                        editando ?
                            <form className={styles.infoEditar} onSubmit={handleSubmit(handleAtualizarUsuario)}>
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
                                <div className={styles.nomeeSobrenome}>
                                    <p className={styles.nomeUsuario}>{watch('nome') + " " + watch('sobrenome')}</p>
                                </div>
                                <p className={styles.infoUsuario}>{watch('email')}</p>
                                <div className={styles.ufCidadeeBairro}>
                                    <p className={styles.infoUsuario}>{watch('uf')}</p>
                                    <p className={styles.infoUsuario}>,­</p>
                                    <p className={styles.infoUsuario}>{watch('cidade')}</p>
                                    <p className={styles.infoUsuario}>,­</p>
                                    <p className={styles.infoUsuario}>{watch('bairro')}</p>
                                </div>
                                <div className={styles.ruaeNumero}>
                                    <p className={styles.infoUsuario}>{watch('rua')}</p>
                                    <p className={styles.infoUsuario}>,­</p>
                                    <p className={styles.infoUsuario}>{watch('numeroCasa')}</p>
                                </div>
                                <p className={styles.tipoUsuario}>{watch('tipo').toUpperCase()[0] + watch('tipo').slice(1)}</p>
                                <div className={styles.borderButton}>
                                    <button className={styles.buttonEditar} onClick={() => setEditando(true)}>Editar</button>
                                </div>
                            </>
                    }
                    <div className={styles.borderButton}>
                        <button className={styles.buttonSair}
                            onClick={() => {
                                localStorage.setItem('authorization', '');
                                navigate('/');
                            }}>
                            Sair
                        </button>
                    </div>
                </div>
            </div>
            {
                !isAdm ?
                    <BuscarReservas reservas={reservas} />
                    :
                    <CadastrarMesa />
            }
        </div >
    );
}