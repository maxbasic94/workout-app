import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PrevButton from '../buttons/PrevButton';
import NextButton from '../buttons/NextButton';
import './Timer.css';

interface TimerProps {
  moveToNext: () => void;
  moveToPrev: () => void;
  setFirstUrl: () => void;
  index: number;
}

const Timer: React.FC<TimerProps> = ({
  moveToNext,
  moveToPrev,
  setFirstUrl,
  index,
}): JSX.Element => {
  return (
    <div className="waitTimer">
      <div className="waitTimerCaption">Get Ready</div>
      <div className="controls">
        <PrevButton moveToPrev={moveToPrev} index={index} />
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={'#1DE9B6'}
          size={128}
          onComplete={() => {
            setFirstUrl();
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <NextButton moveToNext={moveToNext} index={index} />
      </div>
    </div>
  );
};

export default Timer;
