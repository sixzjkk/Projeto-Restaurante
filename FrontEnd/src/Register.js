import { useState } from 'react';

export default function Register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState()

    const submitRegisterUser = async (event) => {
        event.preventDefault();

        const user = await fetch(`${process.env.API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                name,
                email,
                password
            })
        });

        console.log(user);
    }

    return (
        <form onSubmit={submitRegisterUser}>
            <input 
                placeholder='Name: '
                type='string'
                onChange={event => setName(event.target.value)}
            />
            <input 
                placeholder='E-mail: '
                type='email'
                onChange={event => setEmail(event.target.value)}    
            />
            <input 
                placeholder='Password: '
                type='password'
                onChange={event => setPassword(event.target.value)}    
            />
            <button>Register</button>
        </form>
    );
}