import React from 'react';
import { QuestionType } from '../types/types';
import InitImgDiv from './initImg/InitImgDiv';
import StartInfo from './startInfo/StartInfo';
import StartButton from './startButton/StartButton';
import ExercisesList from './exercisesList/ExercisesList';
import './StartPage.css';

interface ExerciseProps {
  exerciseArr: QuestionType[] | undefined;
}

const StartPage: React.FC<ExerciseProps> = ({ exerciseArr: exerciseArr }): JSX.Element => {
  return (
    <div className="StartPage">
      <InitImgDiv />
      <StartInfo />
      <ExercisesList exerciseListArr={exerciseArr} />
      <StartButton />
    </div>
  );
};

export default StartPage;
