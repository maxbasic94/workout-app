import React from 'react';
import { QuestionType } from '../../types/types';
import ExerciseView from '../exerciseView/ExerciseView';

interface ExerListProps {
  exerListArr: QuestionType[] | undefined;
}

const ExercisesList: React.FC<ExerListProps> = ({ exerListArr }): JSX.Element => {
  return (
    <div className="StartPage-ExercisesList">
      {exerListArr?.map((item, index) => (
        <ExerciseView exrList={item} key={index} />
      ))}
    </div>
  );
};

export default ExercisesList;
