import React, { useState } from 'react';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const Form: React.FC<FormProps> = ({ title, handleClick }): JSX.Element => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123456');

  return (
    <div className="Form">
      <input
        className="Form-input_email"
        type="email"
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
      <button className={`Form-button${title}`} onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </div>
  );
};

export default Form;
