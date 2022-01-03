import React from 'react';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './ExerciseTimer.css';
import BaseTimer from '../baseTimer/BaseTimer';

interface ExerciseTimerProps {
  time: number;
  moveToNext: () => void;
  caption: string;
  isPause: boolean;
}

const ExerciseTimer: React.FC<ExerciseTimerProps> = ({
  time,
  moveToNext,
  caption,
  isPause,
}): JSX.Element => {
  return (
    <div className="ExercisePage-ExerciseTimer_container">
      <div className="ExercisePage-ExerciseTimer_caption">{caption}</div>
      <BaseTimer duration={time} isPaused={isPause} color="#FF4081" moveToNext={moveToNext} />
      {/* <CountdownCircleTimer
        isPlaying={isPause}
        duration={time}
        key={id}
        colors={'#FF4081'}
        size={128}
        onComplete={moveToNext}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer> */}
    </div>
  );
};

export default ExerciseTimer;
