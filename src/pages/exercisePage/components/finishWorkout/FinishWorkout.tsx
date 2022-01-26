import React from 'react';
import './FinishWorkout.css';
import complete from './complete.png';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { dataBase } from '../../../../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

interface FinishWorkoutProps {
  time: number;
  workoutName?: string;
}

const FinishWorkout: React.FC<FinishWorkoutProps> = ({ time, workoutName }): JSX.Element => {
  const push = useNavigate();
  const auth = getAuth();
  const handlerClick = () => {
    onAuthStateChanged(auth, async (user) => {
      const performedDocRef = doc(dataBase, `users`, `${user?.uid}`);
      const performedDocData = await (await getDoc(performedDocRef)).data()?.performed;
      let newPerformedArray = [];
      if (Array.isArray(performedDocData)) {
        newPerformedArray = performedDocData.concat({
          time: `${Math.round(time / 60)}`,
          name: workoutName,
        });
      } else {
        newPerformedArray = [
          {
            time: `${Math.round(time / 60)}`,
            name: workoutName,
          },
        ];
      }
      await updateDoc(performedDocRef, {
        performed: newPerformedArray,
      });
    });
    push('/user');
  };

  return (
    <div className="ExercisePage-FinishWorkout_container">
      <img className="ExercisePage-FinishWorkout_image" src={complete} alt="complete" />
      <div className="ExercisePage-FinishWorkout_complete">Workout completed!</div>
      <div className="ExercisePage-FinishWorkout_description">
        Nice job. You&#x2019;re done. Here&#x2019;s the workout summary.
      </div>
      <div className="ExercisePage-FinishWorkout_text_timeCaption">Minutes</div>
      <div className="ExercisePage-FinishWorkout_text_time">{Math.round(time / 60)}</div>
      <button className="ExercisePage-FinishWorkout_button_end" onClick={handlerClick}>
        Save &#38; Continue
      </button>
    </div>
  );
};

export default FinishWorkout;
