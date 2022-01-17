import React from 'react';
import { Workout } from '../../../../types/types';
import UserExerciseList from '../userExerciseList/UserExerciseList';

interface WorkoutListViewProps {
  workoutListView: Workout;
}

const WorkoutListView: React.FC<WorkoutListViewProps> = ({ workoutListView }): JSX.Element => {
  return (
    <div className="UserPage-WorkoutListView">
      <div className="UserPage-WorkoutListView_title">{workoutListView.title}</div>
      <div>
        {workoutListView.exercises.map((item, index) => (
          <UserExerciseList userExercise={item} key={item.id} number={index + 1} />
        ))}
      </div>
      <button>Button</button>
    </div>
  );
};

export default WorkoutListView;
