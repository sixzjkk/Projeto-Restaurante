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
        <table>
            {
            mesas.map(mesa => (
                <tr key={mesa.id}>
                    <td>MESA {mesa.id}</td>
                    <td>CÓDIGO {mesa.codigo}</td>
                    <td>{mesa.n_lugares} LUGARES</td>
                </tr>
            ))
        }
        </table>
    </>
    );
}