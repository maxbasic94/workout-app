import React from 'react';
import nextExr from './images/nextExr.png';

interface NextBtnProps {
  moveToNext: () => void;
  index: number;
}

const NextButton: React.FC<NextBtnProps> = ({ moveToNext, index }): JSX.Element => {
  return (
    <button className="nextButton" onClick={moveToNext}>
      {index !== 20 && <img src={nextExr} />}
    </button>
  );
};

export default NextButton;
