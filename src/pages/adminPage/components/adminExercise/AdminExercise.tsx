import React from 'react';
import useAdminExerciseData from '../../../../hooks/useAdminExerciseData.hook';
import { ExerciseList } from '../../../../types/types';
import './AdminExercise.css';

interface AdminExerciseProps {
  exercise: ExerciseList;
  setIdToArray: (exercise: ExerciseList) => void;
  removeIdToArray: (id: number) => void;
  isModal: boolean;
  checkedExerciseList?: Array<ExerciseList>;
}
const AdminExercise: React.FunctionComponent<AdminExerciseProps> = ({
  exercise,
  setIdToArray,
  removeIdToArray,
  isModal,
  checkedExerciseList,
}): JSX.Element => {
  const { isChecked, handleChange } = useAdminExerciseData(
    checkedExerciseList,
    exercise,
    setIdToArray,
    removeIdToArray
  );

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
