import React from 'react';
import { Link } from 'react-router-dom';
import SingUp from '../../components/singUp/SignUp';
import './RegisterPage.css';

const RegisterPage: React.FC = (): JSX.Element => {
  return (
    <div className="RegisterPage">
      <h1>Register</h1>
      <SingUp />
      <p>
        Already have an account? <Link to="/login">Sing in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
