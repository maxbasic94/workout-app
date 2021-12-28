import React from 'react';
import PrevButton from '../buttons/PrevButton';
import NextButton from '../buttons/NextButton';
import './Control.css';
import ExerciseTimer from '../exerciseTimer/ExerciseTimer';
import WaitTimer from '../waitTimer/WaitTimer';

interface TimerProps {
  moveToNext: () => void;
  moveToPrev: () => void;
  setReady: () => void;
  index: number;
  duration: number;
  id: number;
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
  id,
  caption,
  amountExercise,
  isReady,
  isPause,
}): JSX.Element => {
  return (
    <div className="ExercisePage-Control">
      <PrevButton moveToPrev={moveToPrev} index={index} />
      {isReady ? (
        <WaitTimer setReady={setReady} />
      ) : (
        <ExerciseTimer
          time={duration}
          moveToNext={moveToNext}
          id={id}
          caption={caption}
          isPause={isPause}
        />
      )}

      <NextButton moveToNext={moveToNext} index={index} amountExercise={amountExercise} />
    </div>
  );
};

export default Control;
