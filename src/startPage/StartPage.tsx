import React from 'react';
import InitImgDiv from './initImg/InitImgDiv';
import StartInfo from './startInfo/StartInfo';
import StartButton from './startButton/StartButton';
import './StartPage.css';

const StartPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="startPage">
      <InitImgDiv />
      <StartInfo />
      <StartButton />
    </div>
  );
};

export default StartPage;
