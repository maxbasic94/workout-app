import React from 'react';
import { Workout } from '../../../../types/types';
import AdminExercise from '../adminExercise/AdminExercise';
import './AdminExerciseView.css';

interface AdminExerciseViewProps {
  exerciseList: Workout;
}

const AdminExerciseView: React.FunctionComponent<AdminExerciseViewProps> = ({ exerciseList }) => {
  return (
    <div className="AdminPage-AdminExerciseView">
      <div className="AdminPage-AdminExerciseView_exrCaption">{exerciseList.title}</div>
      {exerciseList.exercises.map((item) => (
        <AdminExercise exercise={item} key={item.id} />
      ))}
      <hr />
    </div>
  );
};

export default AdminExerciseView;
