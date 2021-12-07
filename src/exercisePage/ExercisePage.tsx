import React from 'react';
import Timer from './timer/Timer';
import './ExercisePage.css';

const ExercisePage: React.FC = (): JSX.Element => {
  return (
    <div className="exercisePage">
      <Timer />
    </div>
  );
};

export default ExercisePage;
