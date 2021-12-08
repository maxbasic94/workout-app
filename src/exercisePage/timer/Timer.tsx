import React from 'react';
import prevExr from './prevExr.png';
import nextExr from './nextExr.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './Timer.css';

const Timer: React.FC = (): JSX.Element => {
  return (
    <div className="waitTimer">
      <div className="waitTimerCaption">Get Ready</div>
      <div className="controls">
        <button>
          <img src={prevExr} />
        </button>
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
        <button>
          <img src={nextExr} />
        </button>
      </div>
    </div>
  );
};

export default Timer;
