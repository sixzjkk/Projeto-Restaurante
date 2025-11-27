import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schemaCadastrarMesa } from '../validation/schemaValidacaoMesa';

export default function CadastrarMesa() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schemaCadastrarMesa)
    });

    const handleCadastrarMesa = async (data) => {
        const { codigo, n_lugares } = data;

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
                    n_lugares
                })
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            reset();
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
                <input className=''
                    {...register('codigo')}
                    placeholder='Código: '
                />
                <div>{errors.codigo?.message}</div>
                <input
                    {...register('n_lugares')}
                    placeholder='Capacidade: '
                />
                <div>{errors.n_lugares?.message}</div>
                <button onClick={handleSubmit(handleCadastrarMesa)}>Cadastrar</button>
            </form>
        </div>
    );
}