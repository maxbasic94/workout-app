import React from 'react';
import PrevButton from '../buttons/PrevButton';
import NextButton from '../buttons/NextButton';
import './Control.css';
import ExerTimer from '../exerTimer/ExerTimer';

interface TimerProps {
  moveToNext: () => void;
  moveToPrev: () => void;
  index: number;
  duration: number;
  id: number;
  caption: string;
}

const Control: React.FC<TimerProps> = ({
  moveToNext,
  moveToPrev,
  index,
  duration,
  id,
  caption,
}): JSX.Element => {
  return (
    <div className="control">
      <PrevButton moveToPrev={moveToPrev} index={index} />
      <ExerTimer time={duration} moveToNext={moveToNext} id={id} caption={caption} />
      <NextButton moveToNext={moveToNext} index={index} />
    </div>
  );
};

export default Control;
