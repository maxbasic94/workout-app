import React, { useEffect, useState } from 'react';
import { Workout, ExerciseList as ExerciseList, UserState } from '../src/types/types';
import StartPage from './pages/startPage/StartPage';
import ExercisePage from './pages/exercisePage/ExercisePage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import AdminPage from './pages/adminPage/AdminPage';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.css';
import SwitchTheme from './themes/SwitchTheme';
import { dataBase } from './firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import UserPage from './pages/userPage/UserPage';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Loader from './components/loader/Loader';
import UserContext from './context/UserContext';
import { getStartingData } from './helpers/getWorkoutData';

const App: React.FunctionComponent = (): JSX.Element => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [userData, setUserData] = useState<UserState>({
    isAuth: false,
    email: null,
    token: null,
    id: null,
  });
  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
    setUserData({
      isAuth: false,
      email: null,
      token: null,
      id: null,
    });
  };

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const push = useNavigate();
  const [result, setResult] = useState<Workout[]>([]);
  const [isPageLoad, setIsPageLoad] = useState(false);
  const [exerciseArray, setExerciseArray] = useState<ExerciseList[]>([]);
  const [workoutName, setWorkoutName] = useState<string>('');
  const checkIsAdmin = async (uid: string) => {
    const userDoc = await getDoc(doc(dataBase, 'users', `${uid}`));
    return userDoc.data();
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          isAuth: true,
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        });
        setIsPageLoad(true);
        checkIsAdmin(user.uid).then((data) => {
          data?.isAdmin ? push('/admin') : push('/user');
        });
      } else {
        push('/login');
        setIsPageLoad(true);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setResult(getStartingData());
  }, []);

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
