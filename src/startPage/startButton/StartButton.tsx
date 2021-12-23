import React from 'react';
import './StartButton.css';

const StartButton: React.FunctionComponent = (): JSX.Element => {
  return (
    <a href="/exercise" className="StartPage-StartButton_button_start">
      <span>Start Workout</span>
    </a>
  );
};

export default StartButton;
