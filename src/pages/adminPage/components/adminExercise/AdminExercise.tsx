import React, { useState, ChangeEvent } from 'react';
import { ExerciseList } from '../../../../types/types';
import './AdminExercise.css';

interface AdminExerciseProps {
  exercise: ExerciseList;
}
const AdminExercise: React.FunctionComponent<AdminExerciseProps> = ({ exercise }): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  function handleClick(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.currentTarget.checked);
  }

  return (
    <div className="AdminPage-AdminExercise">
      <div className="AdminPage-ImageContainer">
        <img
          className="AdminPage-ImageContainer_image"
          src={exercise.photo}
          alt="exerciseName"
        ></img>
      </div>
      <div className="AdminPage-ExrInfoContainer">
        <div className="AdminPage-ExrInfoContainer_title">{exercise.title}</div>
        <div className="AdminPage-ExrInfoContainer_duration">{exercise.duration} sec</div>
      </div>
      <div className="AdminPage-CheckboxContainer">
        <input
          className="AdminPage-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleClick}
        />
      </div>
    </div>
  );
};

export default AdminExercise;
