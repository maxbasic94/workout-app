import React, { useEffect, useState } from 'react';
import { DataType, QuestionType, ExersiceType } from '../src/types/types';
import StartPage from './startPage/StartPage';
import ExercisePage from './exercisePage/ExercisePage';
import NotFoundPage from './notFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function getAllExerArr(allExerArray: Array<QuestionType> | undefined) {
  const resultArr: Array<ExersiceType> = [];
  allExerArray?.forEach((item: QuestionType) => {
    item.exercises.forEach((exr: ExersiceType) => {
      resultArr.push(exr);
    });
  });
  return resultArr;
}

const App: React.FunctionComponent = (): JSX.Element => {
  const [result, setResult] = useState<DataType | null>(null);
  const [exrArr, setExrArr] = useState<ExersiceType[]>([]);
  const apiPath: string = process.env.REACT_APP_API_PATH || '';
  useEffect(() => {
    fetch(`${apiPath}`)
      .then((res) => res.json())
      .then((data) => {
        setExrArr(getAllExerArr(data.data.questions));
        setResult(data.data);
      });
  }, [apiPath]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StartPage exerArr={result?.questions} />} />
        <Route path="/exercise" element={<ExercisePage allExr={exrArr} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
