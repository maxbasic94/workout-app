import React from 'react';
import prevExr from './images/prevExr.png';
import nextExr from './images/nextExr.png';
import './Button.css';

interface BtnProps {
  moveTo?: () => void;
  index: number;
  isNext?: boolean;
  amountExercise?: number;
}

const Button: React.FC<BtnProps> = ({ moveTo, index, isNext, amountExercise }): JSX.Element => {
  return (
    <button
      className={isNext ? 'ExercisePage_button_next' : 'ExercisePage_button_prev'}
      onClick={moveTo}
      disabled={isNext && index !== amountExercise ? false : !isNext && index !== 0 ? false : true}
    >
      <img
        src={isNext && index !== amountExercise ? nextExr : !isNext && index !== 0 ? prevExr : ''}
      />
    </button>
  );
};

export default Button;
