import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PrevButton from '../buttons/PrevButton';
import NextButton from '../buttons/NextButton';
import './Timer.css';

const Timer: React.FC = (): JSX.Element => {
  return (
    <div className="waitTimer">
      <div className="waitTimerCaption">Get Ready</div>
      <div className="controls">
        <PrevButton />
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={'#1DE9B6'}
          size={128}
          onComplete={() => {
            console.log('test');
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <NextButton />
      </div>
    </div>
  );
};

export default Timer;
