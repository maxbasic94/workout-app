import React from 'react';
import { Link } from 'react-router-dom';
import './StartInfo.css';
import initialImg from './initialImg.jpg';

const StartInfo: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className="StartPage-InitImgDiv_imgContainer">
        <img
          className="StartPage-InitImgDiv_image_initial"
          src={initialImg}
          alt="initial image"
        ></img>
      </div>
      <div className="StartPage-StartInfo">
        <div className="StartPage-StartInfo_text_day">Day1</div>
        <div className="StartPage-StartInfo_text_caption">Morning Flexibility Routine</div>
        <div className="StartPage-StartInfo_text_levelInfo">Easy • 15 min • No equipment</div>
        <hr />
      </div>
      <Link className="StartPage-StartButton_button_start" to={'/exercise'}>
        Start Workout
      </Link>
    </>
  );
};

export default StartInfo;
