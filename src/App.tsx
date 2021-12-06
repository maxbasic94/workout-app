import React from 'react';
import StartPage from './startPage/StartPage';
import './App.css';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="app">
      <StartPage />
    </div>
  );
};

export default App;
