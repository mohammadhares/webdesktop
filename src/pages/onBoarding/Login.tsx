import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleLogin = () => {
        if (username === 'admin@gmail.com' && password === 'admin123') {
            navigate('/home');
            setUsername('')
            setPassword('')
        } else {
            setMsg('Incorrect Username or password');
            setUsername('')
            setPassword('')
        }
    }
    return (
        <div className="container">
            <div className="moving-clouds" />
            <div className="filter" />
            <div className="form-box">
                <div className="body-form">
                    <h2>Sign In</h2>
                    <form>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control mt-4"
                                placeholder="Username"
                            />
                        </div>
                        <div className="input-group mb-3 mt-4">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className='msg'>
                            {msg && <p>{msg}</p>}
                        </div>
                        <button
                            type="submit"
                            onClick={() => handleLogin()}
                            className="btn btn-secondary btn-block login-btn mt-1">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;