import React from 'react';
import prevExr from './images/prevExr.png';

const PrevButton: React.FC = (): JSX.Element => {
  return (
    <button>
      <img src={prevExr} />
    </button>
  );
};

export default PrevButton;
