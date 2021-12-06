import React from 'react';
import { ExersiceType } from '../../types/types';

interface ExrProps {
  exr: ExersiceType;
}

const Exercise: React.FunctionComponent<ExrProps> = (props): JSX.Element => {
  console.log(props.exr);
  return <div className="exercise">{props.exr.title}</div>;
};

export default Exercise;
