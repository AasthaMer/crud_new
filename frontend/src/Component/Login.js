import React, { useContext, useState } from 'react';
import axios from 'axios';
import data from '../ContextApi';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { setUserData } = useContext(data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/user/login', user).then((res) => {
      console.log('login post request', res.data);
      alert(res.data.message);
      setUserData(res.data.user);
      navigate('/');
    });
  };

  // console.log(user)

  return (
    <div className='log-container'>
      <form>
          <label htmlFor='email'>Email Id</label>
          <input
            type='email'
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />

          <div className='btn-container-log'>
            <button className='btn-log' onClick={handleSubmit}>
              Login
            </button>
            <button className='btn-log' onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        
      </form>
    </div>
  );
};
