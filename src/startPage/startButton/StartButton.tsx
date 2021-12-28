import React from 'react';
import { Link } from 'react-router-dom';
import './StartButton.css';

const StartButton: React.FunctionComponent = (): JSX.Element => {
  return (
    <Link className="StartPage-StartButton_button_start" to={'/exercise'}>
      Start Workout
    </Link>
  );
};

export default StartButton;
