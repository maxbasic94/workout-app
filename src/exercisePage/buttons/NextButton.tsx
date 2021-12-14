import React from 'react';
import nextExr from './images/nextExr.png';

interface NextBtnProps {
  moveToNext: () => void;
  index: number;
  amountExr: number;
}

const NextButton: React.FC<NextBtnProps> = ({ moveToNext, index, amountExr }): JSX.Element => {
  return (
    <button className="nextButton" onClick={moveToNext}>
      {index !== amountExr && <img src={nextExr} />}
    </button>
  );
};

export default NextButton;
