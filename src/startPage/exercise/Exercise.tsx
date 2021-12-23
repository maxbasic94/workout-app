import React from 'react';
import { ExersiceType } from '../../types/types';
import './Exercise.css';

interface ExrProps {
  exr: ExersiceType;
}
const Exercise: React.FunctionComponent<ExrProps> = (props): JSX.Element => {
  return (
    <div className="StartPage-Exercise">
      <div className="Exercise-ImgContainer">
        <img
          className="Exercise-ImgContainer_image"
          src={props.exr.photo}
          alt="exercise name"
        ></img>
      </div>
      <div className="Exercise-ExrInfoContainer">
        <div className="Exercise-ExrInfoContainer_title">{props.exr.title}</div>
        <div className="Exercise-ExrInfoContainer_duration">{props.exr.duration} sec</div>
      </div>
    </div>
  );
};

export default Exercise;
