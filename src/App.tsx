import React from 'react';
import StartPage from './startPage/StartPage';
import ExercisePage from './exercisePage/ExercisePage';
import NotFoundPage from './notFoundPage/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
