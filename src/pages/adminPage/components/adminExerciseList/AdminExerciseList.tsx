import React from 'react';
import useAdminExerciseListData from '../../../../hooks/useAdminExerciseListData.hook';
import { ExerciseList, Workout } from '../../../../types/types';
import AdminExerciseView from '../adminExerciseView/AdminExerciseView';

interface AdminExercisesListProps {
  exerciseListArr: Workout[];
  setExerciseWorkoutArray?: (exerciseCollectionsArray: Array<Workout>) => void;
  isModal: boolean;
  checkedExerciseList?: Array<ExerciseList>;
}

const AdminExercisesList: React.FC<AdminExercisesListProps> = ({
  exerciseListArr: exerciseListArr,
  setExerciseWorkoutArray,
  isModal,
  checkedExerciseList,
}): JSX.Element => {
  const { setExerciseViewToWorkoutArray } = useAdminExerciseListData(setExerciseWorkoutArray);

  return (
    <div className={`${isModal ? 'Modal' : 'AdminPage'}-AdminExercisesList`}>
      {exerciseListArr?.map((item) => (
        <AdminExerciseView
          isModal={isModal}
          exerciseList={item}
          key={item.title}
          setExerciseViewToWorkoutArray={setExerciseViewToWorkoutArray}
          checkedExerciseList={checkedExerciseList}
        />
      ))}
    </div>
  );
};

export default AdminExercisesList;
