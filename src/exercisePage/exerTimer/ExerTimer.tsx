import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface ExerTimerProps {
  time: number;
  moveToNext: () => void;
  id: number;
  caption: string;
  isPause: boolean;
}

const ExerTimer: React.FC<ExerTimerProps> = ({
  time,
  moveToNext,
  id,
  caption,
  isPause,
}): JSX.Element => {
  console.log(isPause);
  return (
    <div className="exerTimerDiv">
      <div className="timerCaption">{caption}</div>
      <CountdownCircleTimer
        isPlaying={isPause}
        duration={time}
        key={id}
        colors={'#FF4081'}
        size={128}
        onComplete={moveToNext}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default ExerTimer;
