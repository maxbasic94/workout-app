import React, { useState } from 'react';
import { ExerciseList as ExerciseList } from '../src/types/types';
import StartPage from './pages/startPage/StartPage';
import ExercisePage from './pages/exercisePage/ExercisePage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import AdminPage from './pages/adminPage/AdminPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SwitchTheme from './themes/SwitchTheme';
import UserPage from './pages/userPage/UserPage';
import Loader from './components/loader/Loader';
import UserContext from './context/UserContext';
import useTheme from './hooks/useTheme.hook';
import useFormationArrayData from './hooks/useFormationArrayData.hook';
import useUserData from './hooks/useUserData.hook';

const App: React.FunctionComponent = (): JSX.Element => {
  const { theme, switchTheme } = useTheme();
  const { result } = useFormationArrayData();
  const { userData, setUserData, isPageLoad, setIsPageLoad, logOut } = useUserData();
  const [exerciseArray, setExerciseArray] = useState<ExerciseList[]>([]);
  const [workoutName, setWorkoutName] = useState<string>('');

  return isPageLoad ? (
    <UserContext.Provider value={{ userData, setUserData, logOut }}>
      <div className="App" data-theme={theme}>
        <SwitchTheme theme={theme} changeTheme={switchTheme} />
        <Routes>
          {userData.isAuth
            ? [
                <Route
                  key="startPage"
                  path="/"
                  element={
                    <StartPage workoutName={workoutName} setExerciseArray={setExerciseArray} />
                  }
                />,
                <Route
                  key="exercisePage"
                  path="/exercise"
                  element={<ExercisePage allExercises={exerciseArray} workoutName={workoutName} />}
                />,
                <Route
                  key="adminPage"
                  path="/admin"
                  element={<AdminPage exerciseArr={result} />}
                />,
                <Route
                  key="userPage"
                  path="/user"
                  element={<UserPage setWorkoutName={setWorkoutName} />}
                />,
                <Route key="notFoundPage" path="*" element={<Navigate to="/user" />} />,
              ]
            : [
                <Route
                  key="login"
                  path="/login"
                  element={<LoginPage setIsPageLoad={setIsPageLoad} />}
                />,
                <Route key="register" path="/register" element={<RegisterPage />} />,
                <Route key="notFoundPage" path="*" element={<Navigate to="/login" />} />,
              ]}
        </Routes>
      </div>
    </UserContext.Provider>
  ) : (
    <Loader color="#aa00ff" />
  );
};

export default App;
