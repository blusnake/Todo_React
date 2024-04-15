// components/Login.js
import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = savedUsers.find((u) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='login_cont'>
      <h1>Login</h1>
      <input
      className='name_inp'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className='pswrd_inp'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
