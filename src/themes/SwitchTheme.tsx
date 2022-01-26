import React, { useState } from 'react';
import Switch from 'react-switch';
import './SwitchTheme.css';

interface SwitchThemeProps {
  theme: string;
  changeTheme: () => void;
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ theme, changeTheme }): JSX.Element => {
  const initialState = theme === 'light' ? false : true;
  const [checked, setChecked] = useState(initialState);
  const toggleTheme = () => {
    checked ? setChecked(false) : setChecked(true);
    changeTheme();
  };
  return (
    <Switch
      className="App-Switch"
      onChange={toggleTheme}
      checked={checked}
      uncheckedIcon={
        <div className="App-Switch-ImgContainer">
          <img
            src="https://img.icons8.com/external-bearicons-flat-bearicons/17/000000/external-moon-halloween-bearicons-flat-bearicons.png"
            alt={'moon'}
          />
        </div>
      }
      checkedIcon={
        <div className="App-Switch-ImgContainer">
          <img src="https://img.icons8.com/officel/17/000000/sun.png" alt={'sun'} />
        </div>
      }
      onColor="#3c3c3c"
      activeBoxShadow="#161616"
    />
  );
};

export default SwitchTheme;
