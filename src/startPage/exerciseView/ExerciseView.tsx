import React from 'react';
import { QuestionType } from '../../types/types';
import Exercise from '../exercise/Exercise';

interface ExProps {
  exrList: QuestionType;
}

const ExerciseView: React.FunctionComponent<ExProps> = (props) => {
  return (
    <div className="StartPage-StartInfo-ExerciseView">
      <div className="StartPage-StartInfo-ExerciseView_exrCaption">{props.exrList.title}</div>
      {props.exrList.exercises.map((item, index) => (
        <Exercise exr={item} key={index} />
      ))}
      <hr />
    </div>
  );
};

export default ExerciseView;
