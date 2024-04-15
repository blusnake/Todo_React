import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';
import AddForm from './AddForm';
import Header from './Header'

function Home() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');
  let user;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error('Error parsing user data:', error);
  }
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('key')))
  }, [])

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      {user ? (
        <div className='home_page-container'>
          <Header todos={todos} />
          <SearchPanel setStatus={setStatus} status={status} setSearch={setSearch} />
          <TodoList todos={todos} setTodos={setTodos} status={status} search={search} />
          <AddForm todos={todos} setTodos={setTodos} />
          <p>
            <Link to="/login" onClick={() => localStorage.removeItem('user')}>
              Logout
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>
            <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
