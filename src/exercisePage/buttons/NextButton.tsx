import React from 'react';
import nextExr from './images/nextExr.png';
import './NextButton.css';

interface NextBtnProps {
  moveToNext: () => void;
  index: number;
  amountExr: number;
}

const NextButton: React.FC<NextBtnProps> = ({ moveToNext, index, amountExr }): JSX.Element => {
  return (
    <button
      className="ExersicePage_button_next"
      onClick={moveToNext}
      disabled={index !== amountExr ? false : true}
    >
      {index !== amountExr && <img src={nextExr} />}
    </button>
  );
};

export default NextButton;
