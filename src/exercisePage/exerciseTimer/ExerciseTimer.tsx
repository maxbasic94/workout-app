import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './ExerciseTimer.css';

interface ExerciseTimerProps {
  time: number;
  moveToNext?: () => void;
  id: number;
  caption: string;
  isPause: boolean;
}

const ExerciseTimer: React.FC<ExerciseTimerProps> = ({
  time,
  moveToNext,
  id,
  caption,
  isPause,
}): JSX.Element => {
  return (
    <div className="ExercisePage-ExerciseTimer_container">
      <div className="ExercisePage-ExerciseTimer_caption">{caption}</div>
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

export default ExerciseTimer;
