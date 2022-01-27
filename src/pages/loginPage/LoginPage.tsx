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
      <div className="LoginPage-container">
        <h1 className="LoginPage-Caption">Login Page</h1>
        <Login setIsPageLoad={setIsPageLoad} />
        <p className="LoginPage-Link_goToLogin">
          Or <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
