import React from 'react';
import initImg from './initImg.jpg';
import './InitImg.css';

const InitImgDiv: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="initImgDiv">
      <img className="initImg" src={initImg} alt="initial image"></img>
    </div>
  );
};

export default InitImgDiv;
