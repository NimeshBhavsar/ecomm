// Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../slices/authSlice';
import './loginstyle.css'; // Import the CSS file
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = () => {
        // Implement your authentication logic here (e.g., API call, validation)

        // For simplicity, let's assume any non-empty username/password is valid
        if (username.trim() !== '' && password.trim() !== '') {
            // Dispatch the login action to update the authentication state
            dispatch(login());
            // Redirect the user to the home page after successful login
            history.push('/');
        } else {
            // Handle authentication failure (display error message, etc.)
            console.error('Invalid credentials');
        }
    };

    return (

        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
