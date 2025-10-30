import { useState, useEffect } from 'react';

export default function BuscarMesas() {
    const [mesas, setMesas] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/mesas`);

                const data = await res.json();

                setMesas(data.mesas);
            } catch (err) {
                console.log(err);
            }
        }

        buscar();
    })

    if (!mesas) {
        return <p>Carregando...</p>;
    }

    return (
    <>
        {
            mesas.map(mesa => (
                <div key={mesa.id}>
                    <p style={{color: 'white'}}>{mesa.codigo}</p>
                    <p style={{color: 'white'}}>{mesa.n_lugares}</p>
                </div>
            ))
        }
    </>
    );
}