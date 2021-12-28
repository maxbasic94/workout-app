import React from 'react';
import { QuestionType } from '../../types/types';
import Exercise from '../exercise/Exercise';

interface ExerciseProps {
  exrList: QuestionType;
}

const ExerciseView: React.FunctionComponent<ExerciseProps> = (props) => {
  return (
    <div className="StartPage-ExerciseView">
      <div className="StartPage-ExerciseView_exrCaption">{props.exrList.title}</div>
      {props.exrList.exercises.map((item, index) => (
        <Exercise exr={item} key={index} />
      ))}
      <hr />
    </div>
  );
};

export default ExerciseView;
