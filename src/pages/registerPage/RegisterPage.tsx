import React from 'react';
import { Link } from 'react-router-dom';
import SingUp from './components/singUp/SignUp';
import './RegisterPage.css';

const RegisterPage: React.FC = (): JSX.Element => {
  return (
    <div className="RegisterPage">
      <div className="RegisterPage-container">
        <h1 className="RegisterPage-Caption">Register</h1>
        <SingUp />
        <p className="RegisterPage-Link_goToLogin">
          Already have an account? <Link to="/login">Sing in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
