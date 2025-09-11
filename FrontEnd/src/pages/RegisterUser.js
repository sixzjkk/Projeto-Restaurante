import { useState } from 'react';
import apiUser from '../api/apiUser';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await apiUser({name, email, password, functionUser: 'register'});
    }

    return (
        <form onSubmit={handleSubmit}>
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