import { useState } from 'react';

export default function CadastrarMesa() {
    const [codigo, setCodigo] = useState('');
    const [lugares, setLugares] = useState(0);
    const [status, setStatus] = useState(true);

    const handleCadastrarMesa = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('authorization');

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/mesas/novo`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    codigo,
                    n_lugares: lugares,
                    status
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
    }

    return (
        <div>
            <form>
                <h1>
                    Cadastrar Mesas
                </h1>
                <input placeholder='Código' onChange={event => setCodigo(event.target.value)}/>
                <input placeholder='Capacidade' type='number' onChange={event => setLugares(event.target.value)}/>
                <button onClick={handleCadastrarMesa}>Cadastrar</button>
            </form>
        </div>
    );
}