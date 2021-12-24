import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from './ThemeProvider';
import './SwitchTheme.css';

const SwitchTheme: React.FC = (): JSX.Element => {
  const { checked, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      className="App-Switch"
      onChange={toggleTheme}
      checked={checked}
      uncheckedIcon={
        <div className="App-Switch-ImgContainer">
          <img
            src="https://img.icons8.com/external-bearicons-flat-bearicons/17/000000/external-moon-halloween-bearicons-flat-bearicons.png"
            alt={'m'}
          />
        </div>
      }
      checkedIcon={
        <div className="App-Switch-ImgContainer">
          <img src="https://img.icons8.com/officel/17/000000/sun.png" alt={'s'} />
        </div>
      }
      onColor="#3c3c3c"
      activeBoxShadow="#161616"
    />
  );
};

export default SwitchTheme;
