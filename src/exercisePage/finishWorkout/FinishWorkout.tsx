import React from 'react';
import './FinishWorkout.css';
import complete from './complete.png';

const FinishWorkout: React.FC = (): JSX.Element => {
  return (
    <div className="endWorkoutDiv">
      <img className="completeImg" src={complete} />
      <div className="complete">Workout completed!</div>
      <div className="description">Nice job. You’re done. Here’s the workout summary.</div>
      <div className="timeCompleteCap">Minutes</div>
      <div className="timeComplete">25</div>
      <a href="/" className="endButton">
        <span>Save & Continue</span>
      </a>
    </div>
  );
};

export default FinishWorkout;
