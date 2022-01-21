import React, { useEffect, useState } from 'react';
import { Workout, ExerciseList as ExerciseList } from '../src/types/types';
import StartPage from './pages/startPage/StartPage';
import ExercisePage from './pages/exercisePage/ExercisePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import AdminPage from './pages/adminPage/AdminPage';
import { Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.css';
import SwitchTheme from './themes/SwitchTheme';
import { dataBase } from './firebase/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import UserPage from './pages/userPage/UserPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser } from './store/slices/userSlice';

const App: React.FunctionComponent = (): JSX.Element => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const [result, setResult] = useState<Workout[]>([]);
  const [exerciseArray, setExerciseArray] = useState<ExerciseList[]>([]);
  const [workoutName, setWorkoutName] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      } else {
        alert('is not user');
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const exerciseViewCollection = query(collection(dataBase, 'api'));
    const workoutArray: Array<Workout> = [];
    onSnapshot(exerciseViewCollection, (querySnapshot) => {
      querySnapshot.forEach((ExerciseViewItem) => {
        const documentsCollection = query(
          collection(dataBase, 'api', `${ExerciseViewItem.data().title}`, 'exercises')
        );
        const exercisesArray: Array<ExerciseList> = [];

        onSnapshot(documentsCollection, (querySnapshot2) => {
          querySnapshot2.forEach((item) => {
            const exercise = item.data() as ExerciseList;
            exercisesArray.push(exercise);
          });
        });
        const exerciseViewObject = {
          title: ExerciseViewItem.data().title,
          exercises: exercisesArray,
        };
        exerciseViewObject.title === 'Warm up'
          ? workoutArray.unshift(exerciseViewObject)
          : workoutArray.push(exerciseViewObject);
      });
      setResult(workoutArray);
    });
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <SwitchTheme theme={theme} changeTheme={switchTheme} />
      <Routes>
        <Route
          path="/"
          element={<StartPage workoutName={workoutName} setExerciseArray={setExerciseArray} />}
        />
        <Route
          path="/exercise"
          element={<ExercisePage allExercises={exerciseArray} workoutName={workoutName} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage exerciseArr={result} />} />
        <Route path="/user" element={<UserPage setWorkoutName={setWorkoutName} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
