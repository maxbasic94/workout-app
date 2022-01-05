import React from 'react';
import BaseTimer from '../baseTimer/BaseTimer';
import './WaitTimer.css';

interface WaitTimerProps {
  setReady: () => void;
}

const WaitTimer: React.FC<WaitTimerProps> = ({ setReady }): JSX.Element => {
  return (
    <div className="ExercisePage-WaitTimer">
      <div className="ExercisePage-WaitTimer_caption">Get Ready</div>
      <BaseTimer duration={5} color="#1DE9B6" moveToNext={setReady} isPaused />
    </div>
  );
};

export default WaitTimer;
