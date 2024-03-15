import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import{Link} from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8071/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          axios
            .get(`http://localhost:8071/user/${email}`)
            .then((response) => {
              localStorage.setItem('userDetails', JSON.stringify(response.data));
              localStorage.setItem('isLoggedIn', true);
              navigate('/home');
            })
            .catch((error) => console.log(error));
            alert('Successfully Login');
          } else {
            alert('Incorrect email or password. Please try again.');
        }
      })
      .catch((err) => console.log(err));
      
      
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pw" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pw"
            name="pw"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <button className="btn btn-primary" type="submit">Login</button> 
        </div>
        <p>If You dont have an Account</p>
        <Link to="/signup" className="btn btn-primary">sign up</Link>
        
      </form>
    </div>
  );
}
