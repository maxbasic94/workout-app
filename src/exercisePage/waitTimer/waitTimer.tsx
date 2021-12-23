import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './WaitTimer.css';

interface WaitTimerProps {
  setReady: () => void;
}

const WaitTimer: React.FC<WaitTimerProps> = ({ setReady }): JSX.Element => {
  return (
    <div className="ExercisePage-WaitTimer">
      <div className="ExercisePage-WaitTimer_caption">Get Ready</div>
      <CountdownCircleTimer
        isPlaying
        duration={5}
        colors={'#1DE9B6'}
        size={128}
        onComplete={() => {
          setReady();
        }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default WaitTimer;
