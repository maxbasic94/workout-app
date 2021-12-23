import React from 'react';
import initImg from './initImg.jpg';
import './InitImg.css';

const InitImgDiv: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="StartPage-InitImgDiv_imgContainer">
      <img className="StartPage-InitImgDiv_image_initial" src={initImg} alt="initial image"></img>
    </div>
  );
};

export default InitImgDiv;
