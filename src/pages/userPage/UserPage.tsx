import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import './UserPage.css';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import WorkoutList from './components/workoutList/WorkoutList';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData';
import Loader from '../../components/loader/Loader';
import { Workout } from '../../types/types';

interface UserPageProps {
  setWorkoutName: Dispatch<SetStateAction<string>>;
}

const UserPage: React.FC<UserPageProps> = ({ setWorkoutName }): JSX.Element => {
  const { isAuth, email } = useAuth();
  const [workoutList, setWorkoutList] = useState<Array<Workout>>([]);
  const dispatch = useAppDispatch();
  const workoutArray = useFetchFirebaseData();
  console.log(workoutArray);

  useEffect(() => {
    setWorkoutList(workoutArray);
  }, [workoutArray]);

  setTimeout(() => {
    console.log('1', workoutList, workoutArray[0]?.exercises[0]?.id);
  }, 0);

  return isAuth ? (
    <div className="AdminPage">
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
      <h1>User Page</h1>
      {workoutList.length ? (
        <WorkoutList workoutList={workoutList} setWorkoutName={setWorkoutName} />
      ) : (
        <Loader color="#aa00ff" />
      )}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserPage;
