import React from 'react';
import { Workout } from '../../../../types/types';
import AdminExerciseView from '../adminExerciseView/AdminExerciseView';

interface AdminExercisesListProps {
  exerciseListArr: Workout[];
}

const AdminExercisesList: React.FC<AdminExercisesListProps> = ({
  exerciseListArr: exerciseListArr,
}): JSX.Element => {
  return (
    <div className="AdminPage-AdminExercisesList">
      {exerciseListArr?.map((item) => (
        <AdminExerciseView exerciseList={item} key={item.title} />
      ))}
    </div>
  );
};

export default AdminExercisesList;
