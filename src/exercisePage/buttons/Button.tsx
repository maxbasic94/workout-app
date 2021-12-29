import React from 'react';
import prevExercise from './images/prevExercise.png';
import nextExercise from './images/nextExercise.png';
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
        src={
          isNext && index !== amountExercise
            ? nextExercise
            : !isNext && index !== 0
            ? prevExercise
            : ''
        }
      />
    </button>
  );
};

export default Button;
