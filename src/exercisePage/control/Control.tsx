import React from 'react';
import PrevButton from '../buttons/PrevButton';
import NextButton from '../buttons/NextButton';
import './Control.css';
import ExerTimer from '../exerTimer/ExerTimer';
import WaitTimer from '../waitTimer/WaitTimer';

interface TimerProps {
  moveToNext: () => void;
  moveToPrev: () => void;
  setReady: () => void;
  index: number;
  duration: number;
  id: number;
  caption: string;
  amountExr: number;
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
  amountExr,
  isReady,
  isPause,
}): JSX.Element => {
  return (
    <div className="ExercisePage-Control">
      <PrevButton moveToPrev={moveToPrev} index={index} />
      {isReady ? (
        <WaitTimer setReady={setReady} />
      ) : (
        <ExerTimer
          time={duration}
          moveToNext={moveToNext}
          id={id}
          caption={caption}
          isPause={isPause}
        />
      )}

      <NextButton moveToNext={moveToNext} index={index} amountExr={amountExr} />
    </div>
  );
};

export default Control;
