import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = savedUsers.find((u) => u.username === username);
    if (existingUser) {
      alert('Username already exists');
      return;
    }

    const newUser = { username, password };
    savedUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(savedUsers));

    localStorage.setItem('user', JSON.stringify(newUser));

    navigate('/');
  };

  return (
    <div className='register_cont'>
      <h1>Register</h1>
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
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
