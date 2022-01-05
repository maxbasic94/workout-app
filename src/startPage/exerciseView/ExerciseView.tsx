import React from 'react';
import { Workout } from '../../types/types';
import Exercise from '../exercise/Exercise';

interface ExerciseViewProps {
  exerciseList: Workout;
}

const ExerciseView: React.FunctionComponent<ExerciseViewProps> = ({ exerciseList }) => {
  return (
    <div className="StartPage-ExerciseView">
      <div className="StartPage-ExerciseView_exrCaption">{exerciseList.title}</div>
      {exerciseList.exercises.map((item) => (
        <Exercise exercise={item} key={item.id} />
      ))}
      <hr />
    </div>
  );
};

export default ExerciseView;
