import React, { Dispatch, SetStateAction } from 'react';
import { ExerciseList } from '../../../../types/types';
import { useNavigate } from 'react-router-dom';
import './WorkoutCard.css';

interface WorkoutCardProps {
  title: string;
  exercises: Array<ExerciseList>;
  setWorkoutName: Dispatch<SetStateAction<string>>;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  exercises,
  setWorkoutName,
}): JSX.Element => {
  const push = useNavigate();
  //   console.log(title, exercises);
  const handleClick = () => {
    setWorkoutName(title);
    push('/');
  };

  return (
    <div className="UserPage-WorkoutCard">
      <div className="UserPage-WorkoutCard-title">{title}</div>
      {exercises.map((item, index) => (
        <div className="UserPage-WorkoutCard_userExerciseList" key={item.id}>
          {`${index + 1}. ${item.title}`}
        </div>
      ))}
      <button className="UserPage-Button_goToWorkout" onClick={handleClick}>
        Go to Workout
      </button>
    </div>
  );
};

export default WorkoutCard;
