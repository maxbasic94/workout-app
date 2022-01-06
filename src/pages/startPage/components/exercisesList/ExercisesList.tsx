import React from 'react';
import { Workout } from '../../../../types/types';
import ExerciseView from '../exerciseView/ExerciseView';

interface ExerciseListProps {
  exerciseListArr: Workout[];
}

const ExercisesList: React.FC<ExerciseListProps> = ({
  exerciseListArr: exerciseListArr,
}): JSX.Element => {
  return (
    <div className="StartPage-ExercisesList">
      {exerciseListArr?.map((item) => (
        <ExerciseView exerciseList={item} key={item.title} />
      ))}
    </div>
  );
};

export default ExercisesList;
