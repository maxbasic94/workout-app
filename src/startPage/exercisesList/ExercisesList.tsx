import React from 'react';
import { Workout } from '../../types/types';
import ExerciseView from '../exerciseView/ExerciseView';

interface ExerciseListProps {
  exerciseListArr: Workout[];
}

const ExercisesList: React.FC<ExerciseListProps> = ({
  exerciseListArr: exerciseListArr,
}): JSX.Element => {
  return (
    <div className="StartPage-ExercisesList">
      {exerciseListArr?.map((item, index) => (
        <ExerciseView exerciseList={item} key={index} />
      ))}
    </div>
  );
};

export default ExercisesList;
