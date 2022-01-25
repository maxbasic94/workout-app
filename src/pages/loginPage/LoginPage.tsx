import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import Login from './components/login/Login';
import './LoginPage.css';

interface LoginPageProps {
  setIsPageLoad: Dispatch<SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsPageLoad }): JSX.Element => {
  return (
    <div className="LoginPage">
      <h1>Login Page</h1>
      <Login setIsPageLoad={setIsPageLoad} />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
