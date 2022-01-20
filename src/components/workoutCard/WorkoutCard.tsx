import React, { Dispatch, SetStateAction } from 'react';
import { ExerciseList } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import './WorkoutCard.css';
import { deleteDoc, doc } from 'firebase/firestore';
import { dataBase } from '../../firebase/firebase';

interface WorkoutCardProps {
  title: string;
  exercises: Array<ExerciseList>;
  setWorkoutName?: Dispatch<SetStateAction<string>>;
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
  const handleClickGoToWorkoutButton = () => {
    if (setWorkoutName) {
      setWorkoutName(title);
      push('/');
    }
  };
  const handleClickEditButton = () => {
    console.log('editButton', title);
  };
  const handleClickDeleteButton = async () => {
    await deleteDoc(doc(dataBase, `workout`, `${title}`));
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
        <div className={`${classPage}-Div_buttonsContainer`}>
          <button className={`${classPage}-Button_edit`} onClick={handleClickEditButton}>
            Edit
          </button>
          <button className={`${classPage}-Button_delete`} onClick={handleClickDeleteButton}>
            Delete
          </button>
        </div>
      ) : (
        <button
          className={`${classPage}-Button_goToWorkout`}
          onClick={handleClickGoToWorkoutButton}
        >
          Go to Workout
        </button>
      )}
    </div>
  );
};

export default WorkoutCard;
