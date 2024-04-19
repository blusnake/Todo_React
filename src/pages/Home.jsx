import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import SearchPanel from '../components/SearchPanel';
import TodoList from '../components/TodoList';
import AddForm from '../components/AddForm';
import Header from '../components/Header'

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
        <div className='welcoming_page'>
          <h1>Welcome!</h1>
          <div className="welcome_p_cont">
            <p className='p_1'><Link to="/login">Login</Link> </p><span>or</span><p className='p_2'><Link to="/register">Register</Link></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
