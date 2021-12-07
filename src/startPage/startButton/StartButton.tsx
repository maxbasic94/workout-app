import React from 'react';
import './StartButton.css';

const StartButton: React.FunctionComponent = (): JSX.Element => {
  return (
    <a href="/exercise" className="startButton">
      <span>Start Workout</span>
    </a>
  );
};

export default StartButton;
