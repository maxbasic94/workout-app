import React, { useEffect, useState } from 'react';
import { Workout, ExerciseList as ExerciseList } from '../src/types/types';
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
import { collection, query, onSnapshot, getDoc, doc } from 'firebase/firestore';
import UserPage from './pages/userPage/UserPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/reduxHooks';
import { setUser } from './store/slices/userSlice';
import { useAuth } from './hooks/useAuth';
import Loader from './components/loader/Loader';

const App: React.FunctionComponent = (): JSX.Element => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  const push = useNavigate();
  const { isAuth } = useAuth();
  const [result, setResult] = useState<Workout[]>([]);
  const [isPageLoad, setIsPageLoad] = useState(false);
  const [exerciseArray, setExerciseArray] = useState<ExerciseList[]>([]);
  const [workoutName, setWorkoutName] = useState<string>('');
  const dispatch = useAppDispatch();
  const checkIsAdmin = async (uid: string) => {
    const userDoc = await getDoc(doc(dataBase, 'users', `${uid}`));
    return userDoc.data();
  };

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

  return isPageLoad ? (
    <div className="App" data-theme={theme}>
      <SwitchTheme theme={theme} changeTheme={switchTheme} />
      <Routes>
        {isAuth
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
              <Route key="adminPage" path="/admin" element={<AdminPage exerciseArr={result} />} />,
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
  ) : (
    <Loader color="black" />
  );
};

export default App;
