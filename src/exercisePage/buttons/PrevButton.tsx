import React from 'react';
import prevExr from './images/prevExr.png';

interface PrevBtnProps {
  moveToPrev: () => void;
  index: number;
}

const PrevButton: React.FC<PrevBtnProps> = ({ moveToPrev, index }): JSX.Element => {
  return (
    <button className="prevButton" onClick={moveToPrev}>
      {index !== 0 && <img src={prevExr} />}
    </button>
  );
};

export default PrevButton;
