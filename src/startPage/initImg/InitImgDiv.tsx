import React from 'react';
import initImg from './initImg.jpg';
import './InitImg.css';

const InitImgDiv: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="StartPage-StartInfo-ImgContainer">
      <img
        className="StartPage-StartInfo-ImgContainer_image"
        src={initImg}
        alt="initial image"
      ></img>
    </div>
  );
};

export default InitImgDiv;
