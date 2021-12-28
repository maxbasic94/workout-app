import React from 'react';
import nextExr from './images/nextExr.png';
import './NextButton.css';

interface NextBtnProps {
  moveToNext?: () => void;
  index: number;
  amountExercise: number;
}

const NextButton: React.FC<NextBtnProps> = ({ moveToNext, index, amountExercise }): JSX.Element => {
  return (
    <button
      className="ExercisePage_button_next"
      onClick={moveToNext}
      disabled={index !== amountExercise ? false : true}
    >
      {index !== amountExercise && <img src={nextExr} />}
    </button>
  );
};

export default NextButton;
