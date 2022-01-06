import React from 'react';
import { Workout } from '../../types/types';
import StartInfo from './components/startInfo/StartInfo';
import StartButton from './components/startButton/StartButton';
import ExercisesList from './components/exercisesList/ExercisesList';
import './StartPage.css';

interface ExerciseProps {
  exerciseArr: Workout[];
}

const StartPage: React.FC<ExerciseProps> = ({ exerciseArr: exerciseArr }): JSX.Element => {
  return (
    <div className="StartPage">
      <StartInfo />
      <ExercisesList exerciseListArr={exerciseArr} />
      <StartButton />
    </div>
  );
};

export default StartPage;
