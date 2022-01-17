import React from 'react';
import './UserPage.css';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import WorkoutList from './components/workoutList/WorkoutList';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData';

const UserPage: React.FC = (): JSX.Element => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  const workoutList = useFetchFirebaseData();
  console.log(workoutList);

  return isAuth ? (
    <div className="AdminPage">
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
      <h1>User Page</h1>
      <div className="AdminPage-WorkoutListContainer">
        <WorkoutList workoutList={workoutList} />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserPage;
