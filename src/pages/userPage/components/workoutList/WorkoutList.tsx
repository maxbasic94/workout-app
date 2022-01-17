import React from 'react';
import { Workout } from '../../../../types/types';
import WorkoutListView from '../workoutListView/WorkoutListView';

interface WorkoutListProps {
  workoutList: Array<Workout>;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workoutList }): JSX.Element => {
  workoutList.forEach((item) => {
    console.log(item);
  });
  return (
    <div className="UserPage-WorkoutList_container">
      {workoutList.map((item) => (
        <WorkoutListView workoutListView={item} key={item.title} />
      ))}
    </div>
  );
};

export default WorkoutList;
