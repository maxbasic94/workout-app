import React, { useEffect, useState } from 'react';
import { Workout, ExerciseList as ExerciseList } from '../src/types/types';
import StartPage from './pages/startPage/StartPage';
import ExercisePage from './pages/exercisePage/ExercisePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.css';
import SwitchTheme from './themes/SwitchTheme';

function getAllExerciseArray(allExerciseArray: Array<Workout> | undefined) {
  const resultArr: Array<ExerciseList> = [];
  allExerciseArray?.forEach((item: Workout) => {
    item.exercises.forEach((exr: ExerciseList) => {
      resultArr.push(exr);
    });
  });
  return resultArr;
}

const App: React.FunctionComponent = (): JSX.Element => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const [result, setResult] = useState<Workout[]>([]);
  const [exerciseArray, setExerciseArray] = useState<ExerciseList[]>([]);
  const apiPath: string = process.env.REACT_APP_API_PATH || '';
  useEffect(() => {
    fetch(`${apiPath}`)
      .then((res) => res.json())
      .then((data) => {
        setExerciseArray(getAllExerciseArray(data.data.questions));
        setResult(data.data.questions);
      });
  }, [apiPath]);

  return (
    <>
      <div className="App" data-theme={theme}>
        <SwitchTheme changeTheme={switchTheme} />
        <Routes>
          <Route path="/" element={<StartPage exerciseArr={result} />} />
          <Route path="/exercise" element={<ExercisePage allExercises={exerciseArray} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
