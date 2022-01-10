import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { Workout } from '../../types/types';
import StartInfo from './components/startInfo/StartInfo';
import ExercisesList from './components/exercisesList/ExercisesList';
import './StartPage.css';
import { useAppDispatch } from '../../hooks/redux-hooks';

interface ExerciseProps {
  exerciseArr: Workout[];
}

const StartPage: React.FC<ExerciseProps> = ({ exerciseArr: exerciseArr }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className="StartPage">
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
      <StartInfo />
      <ExercisesList exerciseListArr={exerciseArr} />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default StartPage;
