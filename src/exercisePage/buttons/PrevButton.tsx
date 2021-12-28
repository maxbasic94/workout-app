import React from 'react';
import prevExr from './images/prevExr.png';
import './PrevButton.css';

interface PrevBtnProps {
  moveToPrev?: () => void;
  index: number;
}

const PrevButton: React.FC<PrevBtnProps> = ({ moveToPrev, index }): JSX.Element => {
  return (
    <button
      className="ExercisePage_button_prev"
      onClick={moveToPrev}
      disabled={index !== 0 ? false : true}
    >
      {index !== 0 && <img src={prevExr} />}
    </button>
  );
};

export default PrevButton;
