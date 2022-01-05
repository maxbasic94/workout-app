import React from 'react';
import './FinishWorkout.css';
import complete from './complete.png';
import { Link } from 'react-router-dom';

interface FinishWorkoutProps {
  time: number;
}

const FinishWorkout: React.FC<FinishWorkoutProps> = ({ time }): JSX.Element => {
  return (
    <div className="ExercisePage-FinishWorkout_container">
      <img className="ExercisePage-FinishWorkout_image" src={complete} />
      <div className="ExercisePage-FinishWorkout_complete">Workout completed!</div>
      <div className="ExercisePage-FinishWorkout_description">
        Nice job. You’re done. Here’s the workout summary.
      </div>
      <div className="ExercisePage-FinishWorkout_text_timeCaption">Minutes</div>
      <div className="ExercisePage-FinishWorkout_text_time">{Math.round(time / 60)}</div>
      <Link className="ExercisePage-FinishWorkout_button_end" to={'/'}>
        Save & Continue
      </Link>
    </div>
  );
};

export default FinishWorkout;
