import React from 'react';
import { ExerciseList } from '../../types/types';
import './Exercise.css';

interface ExerciseProps {
  exercise: ExerciseList;
}
const Exercise: React.FunctionComponent<ExerciseProps> = ({ exercise }): JSX.Element => {
  return (
    <div className="StartPage-Exercise">
      <div className="Exercise-ImageContainer">
        <img
          className="Exercise-ImageContainer_image"
          src={exercise.photo}
          alt="exerciseName"
        ></img>
      </div>
      <div className="Exercise-ExrInfoContainer">
        <div className="Exercise-ExrInfoContainer_title">{exercise.title}</div>
        <div className="Exercise-ExrInfoContainer_duration">{exercise.duration} sec</div>
      </div>
    </div>
  );
};

export default Exercise;
