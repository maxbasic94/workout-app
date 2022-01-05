import React from 'react';
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
    </div>
  );
};

export default ExerciseTimer;
