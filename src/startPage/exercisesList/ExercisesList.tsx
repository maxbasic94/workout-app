import React from 'react';
import { QuestionType } from '../../types/types';
import ExerciseView from '../exerciseView/ExerciseView';

interface ExerciseListProps {
  exerciseListArr: QuestionType[];
}

const ExercisesList: React.FC<ExerciseListProps> = ({
  exerciseListArr: exerciseListArr,
}): JSX.Element => {
  return (
    <div className="StartPage-ExercisesList">
      {exerciseListArr?.map((item, index) => (
        <ExerciseView exrList={item} key={index} />
      ))}
    </div>
  );
};

export default ExercisesList;
