import { useEffect, useState } from 'react';
import { useForm, Watch } from 'react-hook-form';

export default function CadastrarReserva() {
    const { register, handleSubmit, watch, formState: { error } } = useForm();
    const [mesas, setMesas] = useState();

    const handleCadastrar = async (data) => {
        try {
            const token = localStorage.getItem('authorization');

            const res = await fetch(`${import.meta.env.VITE_API_URL}/reservas/novos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({

                })
            });

            console.log(res);
        } catch (err) {
            alert(err);
        }
    }

    
    
    useEffect(() => {
        const buscar = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/mesas`);
                const data = await res.json();
                setMesas(data.mesas);
            } catch (err) {
                console.log(err);
            }
        };
        
        buscar();
    }, []);
    
    if (!mesas) {
        return <h2>Carregando...</h2>;
    }

    const mesaSelecionada = mesas.find(
        (m) => m.id === Number(watch('mesa_id'))
    );
    
    return (
        <div>
            <form onSubmit={handleSubmit(handleCadastrar)}>
                <select className=''
                    {...register('mesa_id', { required: true })}
                    >
                    {
                        mesas.map((mesa) =>
                            <option key={mesa.id} value={mesa.id}>
                                Mesa {mesa.id}
                            </option>
                        )
                    }
                </select>
                <input className=''
                    {...register('data', { required: true })}
                    type='date'
                />
                <select className=''
                    {...register('n_pessoas', { required: true })}
                >
                    {mesaSelecionada &&
                        Array.from({ length: mesaSelecionada.n_lugares }).map((_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                </select>
            </form>
        </div>
    );
}