import React from 'react';
import './Control.css';
import ExerciseTimer from '../exerciseTimer/ExerciseTimer';
import Button from '../nextPrevButton/Button';
import WaitTimer from '../waitTimer/WaitTimer';

interface TimerProps {
  moveToNext: () => void;
  moveToPrev: () => void;
  setReady: () => void;
  index: number;
  duration: number;
  id?: number;
  caption: string;
  amountExercise: number;
  isReady: boolean;
  isPause: boolean;
}

const Control: React.FC<TimerProps> = ({
  moveToNext,
  moveToPrev,
  setReady,
  index,
  duration,
  caption,
  amountExercise,
  isReady,
  isPause,
}): JSX.Element => {
  return (
    <div className="ExercisePage-Control">
      <Button index={index} moveTo={moveToPrev} />
      {isReady ? (
        <WaitTimer setReady={setReady} />
      ) : (
        <ExerciseTimer
          time={duration}
          moveToNext={moveToNext}
          caption={caption}
          isPause={isPause}
        />
      )}
      <Button index={index} moveTo={moveToNext} amountExercise={amountExercise} isNext />
    </div>
  );
};

export default Control;
