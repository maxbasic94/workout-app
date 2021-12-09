import React from 'react';
import { ExersiceType } from '../../src/types/types';
import Timer from './timer/Timer';
import './ExercisePage.css';
// import PlayPauseButton from './buttons/PlayPauseButton';

interface ExrPageProps {
  allExr: Array<ExersiceType>;
}

const ExercisePage: React.FC<ExrPageProps> = ({ allExr }): JSX.Element => {
  console.log(allExr);
  return (
    <div className="exercisePage">
      <Timer />
      {/* <PlayPauseButton /> */}
    </div>
  );
};

export default ExercisePage;
