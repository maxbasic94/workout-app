import React from 'react';
import { QuestionType } from '../../types/types';
import Exercise from '../exercise/Exercise';

interface ExerciseViewProps {
  exerciseList: QuestionType;
}

const ExerciseView: React.FunctionComponent<ExerciseViewProps> = (props) => {
  return (
    <div className="StartPage-ExerciseView">
      <div className="StartPage-ExerciseView_exrCaption">{props.exerciseList.title}</div>
      {props.exerciseList.exercises.map((item, index) => (
        <Exercise exercise={item} key={index} />
      ))}
      <hr />
    </div>
  );
};

export default ExerciseView;
