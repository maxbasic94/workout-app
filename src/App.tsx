import React, { useEffect, useState } from 'react';
import { DataType, QuestionType, ExerciseType as ExerciseType } from '../src/types/types';
import StartPage from './startPage/StartPage';
import ExercisePage from './exercisePage/ExercisePage';
import NotFoundPage from './notFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SwitchTheme from './themes/SwitchTheme';

function getAllExerciseArray(allExerciseArray: Array<QuestionType> | undefined) {
  const resultArr: Array<ExerciseType> = [];
  allExerciseArray?.forEach((item: QuestionType) => {
    item.exercises.forEach((exr: ExerciseType) => {
      resultArr.push(exr);
    });
  });
  return resultArr;
}

const App: React.FunctionComponent = (): JSX.Element => {
  const [result, setResult] = useState<DataType | null>(null);
  const [exrArr, setExrArr] = useState<ExerciseType[]>([]);
  const apiPath: string = process.env.REACT_APP_API_PATH || '';
  useEffect(() => {
    fetch(`${apiPath}`)
      .then((res) => res.json())
      .then((data) => {
        setExrArr(getAllExerciseArray(data.data.questions));
        setResult(data.data);
      });
  }, [apiPath]);
  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <div className="App">
      <SwitchTheme />
      <Routes>
        <Route path="/" element={<StartPage exerciseArr={result?.questions} />} />
        <Route path="/exercise" element={<ExercisePage allExercises={exrArr} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
