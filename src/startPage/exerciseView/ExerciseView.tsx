import React from 'react';
import { QuestionType } from '../../types/types';

interface ExProps {
  q: QuestionType;
}

const ExerciseView: React.FunctionComponent<ExProps> = (props) => {
  console.log(props.q);
  return <div className="exerciseType">{props.q.title}</div>;
};

export default ExerciseView;
