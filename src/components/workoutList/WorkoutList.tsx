import React, { Dispatch, SetStateAction } from 'react';
import { Workout } from '../../types/types';
import WorkoutCard from '../workoutCard/WorkoutCard';
import './WorkoutList.css';

interface WorkoutListProps {
  workoutList: Array<Workout>;
  setWorkoutName?: Dispatch<SetStateAction<string>>;
  isAdminPage: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const WorkoutList: React.FC<WorkoutListProps> = ({
  workoutList,
  setWorkoutName,
  isAdminPage,
  setIsOpen,
}): JSX.Element => {
  const classPage = isAdminPage ? 'AdminPage' : 'UserPage';
  return (
    <div className={`${classPage}-WorkoutList_container`}>
      {workoutList.map(({ title, exercises }) => (
        <WorkoutCard
          title={title}
          exercises={exercises}
          setWorkoutName={setWorkoutName}
          key={`${title}_${exercises.length}`}
          isAdminPage={isAdminPage}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
};

export default WorkoutList;
