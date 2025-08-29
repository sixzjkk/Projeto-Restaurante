import { useState } from 'react';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    
    const submitRegisterUser = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }).json();

            if (res.error) {
                throw new Error(res.message);
            }

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={submitRegisterUser}>
            <input
                placeholder='Name: '
                type='string'
                onChange={event => setName(event.target.value)}
                value={name}
            />
            <input
                placeholder='E-mail: '
                type='email'
                onChange={event => setEmail(event.target.value)}
                value={email}
            />
            <input
                placeholder='Password: '
                type='password'
                onChange={event => setPassword(event.target.value)}
                value={password}
            />
            <button>Register</button>
        </form>
    );
}