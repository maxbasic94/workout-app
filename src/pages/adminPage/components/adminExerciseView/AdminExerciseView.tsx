import React from 'react';
import useAdminExerciseViewData from '../../../../hooks/useAdminExerciseViewData.hook';
import { Workout, ExerciseList } from '../../../../types/types';
import AdminExercise from '../adminExercise/AdminExercise';
import './AdminExerciseView.css';

interface AdminExerciseViewProps {
  exerciseList: Workout;
  setExerciseViewToWorkoutArray: (exerciseViewObject: Workout) => void;
  isModal: boolean;
  checkedExerciseList?: Array<ExerciseList>;
}

const AdminExerciseView: React.FunctionComponent<AdminExerciseViewProps> = ({
  exerciseList,
  setExerciseViewToWorkoutArray,
  isModal,
  checkedExerciseList,
}) => {
  const { setIdToArray, removeIdToArray } = useAdminExerciseViewData(
    setExerciseViewToWorkoutArray,
    exerciseList
  );

  return (
    <div className={`${isModal ? 'Modal' : 'AdminPage'}-AdminExerciseView`}>
      <div className={`${isModal ? 'Modal' : 'AdminPage'}-AdminExerciseView_exrCaption`}>
        {exerciseList.title}
      </div>
      {exerciseList.exercises.map((item) => (
        <AdminExercise
          isModal={isModal}
          exercise={item}
          key={item.id}
          setIdToArray={setIdToArray}
          removeIdToArray={removeIdToArray}
          checkedExerciseList={checkedExerciseList}
        />
      ))}
      <hr />
    </div>
  );
};

export default AdminExerciseView;
