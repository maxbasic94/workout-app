import React from 'react';
import { Link } from 'react-router-dom';
import Login from './components/login/Login';
import './LoginPage.css';

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className="LoginPage">
      <h1>Login Page</h1>
      <Login />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
