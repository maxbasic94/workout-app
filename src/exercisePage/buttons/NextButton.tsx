import React from 'react';
import nextExr from './images/nextExr.png';

const NextButton: React.FC = (): JSX.Element => {
  return (
    <button>
      <img src={nextExr} />
    </button>
  );
};

export default NextButton;
