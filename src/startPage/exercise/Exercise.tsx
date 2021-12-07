import React from 'react';
import { ExersiceType } from '../../types/types';
import './Exercise.css';

interface ExrProps {
  exr: ExersiceType;
}

const Exercise: React.FunctionComponent<ExrProps> = (props): JSX.Element => {
  console.log(props.exr);
  return (
    <div className="exercise">
      <div className="exrImgDiv">
        <img className="exrImg" src={props.exr.photo} alt="exercise name"></img>
      </div>
      <div className="exrInfo">
        <div className="exrTitle">{props.exr.title}</div>
        <div className="exrDuration">{props.exr.duration} sec</div>
      </div>
    </div>
  );
};

export default Exercise;
