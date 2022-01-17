import React from 'react';
import { ExerciseList } from '../../../../types/types';

interface UserExerciseListProps {
  userExercise: ExerciseList;
  number: number;
}

const UserExerciseList: React.FC<UserExerciseListProps> = ({
  userExercise,
  number,
}): JSX.Element => {
  return (
    <div className="UserPage-UserExerciseList-container">
      <div>{`${number}. ${userExercise.title}`}</div>
    </div>
  );
};

export default UserExerciseList;
