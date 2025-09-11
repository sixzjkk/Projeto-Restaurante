import { useState } from 'react';
import apiUser from '../api/apiUser';

export default function LoginUser () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await apiUser({email, password, functionUser: 'login'});
    }

    return (
        <form onSubmit={handleSubmit}>
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