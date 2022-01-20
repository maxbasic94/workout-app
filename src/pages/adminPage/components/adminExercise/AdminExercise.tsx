import React, { useState, ChangeEvent } from 'react';
import { ExerciseList } from '../../../../types/types';
import './AdminExercise.css';

interface AdminExerciseProps {
  exercise: ExerciseList;
  setIdToArray: (exercise: ExerciseList) => void;
  removeIdToArray: (id: number) => void;
  isModal: boolean;
}
const AdminExercise: React.FunctionComponent<AdminExerciseProps> = ({
  exercise,
  setIdToArray,
  removeIdToArray,
  isModal,
}): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.checked);
    event.currentTarget.checked ? setIdToArray(exercise) : removeIdToArray(exercise.id);
  };

  return (
    <div className={`${isModal ? 'Modal' : 'AdminPage'}-AdminExercise`}>
      <div className={`${isModal ? 'Modal' : 'AdminPage'}-ImageContainer`}>
        <img
          className={`${isModal ? 'Modal' : 'AdminPage'}-ImageContainer_image`}
          src={exercise.photo}
          alt="exerciseName"
        ></img>
      </div>
      <div className={`${isModal ? 'Modal' : 'AdminPage'}-ExrInfoContainer`}>
        <div className={`${isModal ? 'Modal' : 'AdminPage'}-ExrInfoContainer_title`}>
          {exercise.title}
        </div>
        <div className={`${isModal ? 'Modal' : 'AdminPage'}-ExrInfoContainer_duration`}>
          {exercise.duration} sec
        </div>
      </div>
      <div className={`${isModal ? 'Modal' : 'AdminPage'}-CheckboxContainer`}>
        <input
          className={`${isModal ? 'Modal' : 'AdminPage'}-checkbox`}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AdminExercise;
