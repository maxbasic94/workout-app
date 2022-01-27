import React, { useState, ChangeEvent } from 'react';
import './Form.css';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const Form: React.FC<FormProps> = ({ title, handleClick }): JSX.Element => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123456');
  const handleFormSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="Form">
      <form onSubmit={handleFormSubmit} action="javascript:void(0)" method="get">
        <input
          className="Form-input_email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
        <input
          className="Form-input_password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
        <button className="Form-Button_submit" onClick={() => handleClick(email, password)}>
          {title}
        </button>
      </form>
    </div>
  );
};

export default Form;
