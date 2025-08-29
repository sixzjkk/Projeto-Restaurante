import { useState } from 'react';

export default function LoginUser () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLoginUser = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
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
        <form onSubmit={submitLoginUser}>
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