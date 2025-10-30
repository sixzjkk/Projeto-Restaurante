import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import iconUser from '../assets/icon-user.png';
import styles from '../styles/userPerfil.module.css';

export default function UserPerfil() {
    const [usuario, setUsuario] = useState();
    const [editando, setEditando] = useState(false);
    const [newNome, setNewNome] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const navigate = useNavigate();

    const updateUsuario = async () => {
        if (newNome == usuario.nome && newEmail == usuario.email) {
            setEditando(false);
            return;
        }

        try {
            const token = localStorage.getItem('authorization');

            const res = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    nome: newNome,
                    email: newEmail
                })
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            alert(data.message);
            window.location.reload();
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

                setUsuario(data.usuario);
                setNewNome(data.usuario.nome);
                setNewEmail(data.usuario.email)
            } catch (err) {
                alert(err);
                localStorage.removeItem('authorization');
                navigate('/user/login');
            }
        };

        buscarPerfil();
    }, []);

    if (!usuario) {
        return <h2>Carregando...</h2>;
    }

    return (
        <div>
            <Link className={styles.voltar} to='/'>ᐸ</Link>
            <div className={styles.infoPerfil}>
                <img src={usuario.img ? usuario.img : iconUser} />
                <div>
                    {
                        editando ?
    
                            <div className={styles.infoEditar}>
                                <input className={styles.inputEditar} onChange={event => setNewNome(event.target.value)} value={newNome} />
                                <input className={styles.inputEditar} onChange={event => setNewEmail(event.target.value)} value={newEmail} />
                                <div className={styles.borderButton}>
                                    <button className={styles.buttonEditarSalvar} onClick={() => updateUsuario()}>Salvar</button>
                                </div>
                            </div> : <>
                                <p className={styles.nomeUsuario}>{usuario.nome}</p>
                                <p className={styles.emailUsuario}>{usuario.email}</p>
                                <div className={styles.borderButton}>
                                    <button className={styles.buttonEditar} onClick={() => setEditando(true)}>Editar</button>
                                </div>
                            </>
                    }
                    <p className={styles.tipoUsuario}>{usuario.tipo.toUpperCase()[0] + usuario.tipo.slice(1)}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}