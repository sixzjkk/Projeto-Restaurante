import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiUser from '../api/apiUser';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password == confirmPassword) {
            await apiUser({ name, email, password, confirmPassword, functionUser: 'register', navigate });  
        } else {
            alert('Passwords do not match');
        }
        
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
            <input
                placeholder='Confirm Password: '
                type='password'
                onChange={event => setConfirmPassword(event.target.value)}
                value={confirmPassword}
            />
            <button>Register</button>
        </form>
    );
}