import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserPerfil() {
    const [usuario, setUsuario] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const buscarPerfil = async () => {
            try {
                const token = localStorage.getItem('authorization');

                const res = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, {
                    headers: { 'authorization': `Bearer ${token}` }
                });

                const data = await res.json();

                if (data.error) {
                    throw new Error (data.message);
                }

                setUsuario(data.usuario);
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
        <>
            <h1>{usuario.nome}</h1>
            <h1>{usuario.email}</h1>
            <h1>{usuario.tipo}</h1>
            <h1>{usuario.reservas}</h1>
        </>
    );
}