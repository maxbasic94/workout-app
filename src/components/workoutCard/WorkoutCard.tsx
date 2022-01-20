import React, { Dispatch, SetStateAction } from 'react';
import { ExerciseList } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import './WorkoutCard.css';

interface WorkoutCardProps {
  title: string;
  exercises: Array<ExerciseList>;
  setWorkoutName: Dispatch<SetStateAction<string>>;
  isAdminPage: boolean;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  exercises,
  setWorkoutName,
  isAdminPage,
}): JSX.Element => {
  const classPage = isAdminPage ? 'AdminPage' : 'UserPage';
  const push = useNavigate();
  const handleClick = () => {
    setWorkoutName(title);
    push('/');
  };

  return (
    <div className={`${classPage}-WorkoutCard`}>
      <div className={`${classPage}-WorkoutCard-title`}>{title}</div>
      {exercises.map((item, index) => (
        <div className={`${classPage}-WorkoutCard_userExerciseList`} key={item.id}>
          {`${index + 1}. ${item.title}`}
        </div>
      ))}
      {isAdminPage ? (
        <>
          <button className={`${classPage}-Button_edit`}>Edit</button>
          <button className={`${classPage}-Button_delete`}>Delete</button>
        </>
      ) : (
        <button className={`${classPage}-Button_goToWorkout`} onClick={handleClick}>
          Go to Workout
        </button>
      )}
    </div>
  );
};

export default WorkoutCard;
