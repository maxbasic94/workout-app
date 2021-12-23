import React from 'react';
import { QuestionType } from '../types/types';
import InitImgDiv from './initImg/InitImgDiv';
import StartInfo from './startInfo/StartInfo';
import StartButton from './startButton/StartButton';
import ExercisesList from './exercisesList/ExercisesList';
import './StartPage.css';

interface ExerProps {
  exerArr: QuestionType[] | undefined;
}

const StartPage: React.FC<ExerProps> = ({ exerArr }): JSX.Element => {
  return (
    <div className="StartPage">
      <InitImgDiv />
      <StartInfo />
      <ExercisesList exerListArr={exerArr} />
      <StartButton />
    </div>
  );
};

export default StartPage;
