import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import iconUser from '../assets/icon-user.png';

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
            <div>
                <img src={usuario.img ? usuario.img : iconUser} />
                <div>
                    {
                        editando ?
                            <>
                                <input onChange={event => setNewNome(event.target.value)} value={newNome} />
                                <input onChange={event => setNewEmail(event.target.value)} value={newEmail} />
                                <button onClick={() => updateUsuario()}>Salvar</button>
                            </> : <>
                                <p>{usuario.nome}</p>
                                <p>{usuario.email}</p>
                                <button onClick={() => setEditando(true)}>Editar</button>
                            </>
                    }
                    <p>{usuario.tipo}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}