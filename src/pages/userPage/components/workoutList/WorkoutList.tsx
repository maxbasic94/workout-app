import React, { Dispatch, SetStateAction } from 'react';
import { Workout } from '../../../../types/types';
import WorkoutCard from '../workoutCard/WorkoutCard';
import './WorkoutList.css';

interface WorkoutListProps {
  workoutList: Array<Workout>;
  setWorkoutName: Dispatch<SetStateAction<string>>;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workoutList, setWorkoutName }): JSX.Element => {
  return (
    <div className="UserPage-WorkoutList_container">
      {workoutList.map(({ title, exercises }) => (
        <WorkoutCard
          title={title}
          exercises={exercises}
          setWorkoutName={setWorkoutName}
          key={`${title}_${exercises.length}`}
        />
      ))}
    </div>
  );
};

export default WorkoutList;
