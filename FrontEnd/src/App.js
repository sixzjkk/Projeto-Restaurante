import { useNavigate } from 'react-router-dom';

export default function App () {
    const navigate  = useNavigate();

    return (
        <div>
            <h1 onClick={() => navigate('/user/register')}>REGISTER</h1>
            <h1 onClick={() => navigate('/user/login')}>LOGIN</h1>
        </div>
    );
}