import React, { useEffect, useState } from 'react';
import { DataType, QuestionType, ExersiceType } from '../src/types/types';
import StartPage from './startPage/StartPage';
import ExercisePage from './exercisePage/ExercisePage';
import NotFoundPage from './notFoundPage/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  const apiPath: string = process.env.REACT_APP_API_PATH || '';
  useEffect(() => {
    fetch(`${apiPath}`)
      .then((res) => res.json())
      .then((data) => setResult(data.data));
  }, [apiPath]);

  const allExerArray = getAllExerArr(result?.questions);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage exerArr={result?.questions} />} />
          <Route path="/exercise" element={<ExercisePage allExr={allExerArray} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
