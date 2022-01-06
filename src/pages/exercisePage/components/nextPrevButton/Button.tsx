import React from 'react';
import prevExercise from './prevExercise.png';
import nextExercise from './nextExercise.png';
import './Button.css';

interface ButtonProps {
  moveTo?: () => void;
  index: number;
  isNext?: boolean;
  amountExercise?: number;
}

const Button: React.FC<ButtonProps> = ({ moveTo, index, isNext, amountExercise }): JSX.Element => {
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
