import React, { Dispatch, SetStateAction, useState } from 'react';
import './UserPage.css';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import WorkoutList from './components/workoutList/WorkoutList';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData';
import Loader from '../../components/loader/Loader';
import CompletedWorkout from './components/completedWorkout/CompletedWorkout';
// import { Workout } from '../../types/types';

interface UserPageProps {
  setWorkoutName: Dispatch<SetStateAction<string>>;
}

const UserPage: React.FC<UserPageProps> = ({ setWorkoutName }): JSX.Element => {
  const [watchButtonState, setWatchButtonState] = useState(true);
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  const workoutArray = useFetchFirebaseData();
  const handleClickWatchWorkout = () => {
    watchButtonState ? setWatchButtonState(false) : setWatchButtonState(true);
  };

  return isAuth ? (
    <div className="UserPage">
      <div className="UserPage-Div_buttonsContainer">
        <button className="UserPage-Button_logOut" onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>
        <button className="UserPage-Button_watchWorkout" onClick={handleClickWatchWorkout}>
          {watchButtonState ? `Watch performed workouts` : `Select new workout`}
        </button>
      </div>
      <h1>User Page</h1>
      {!watchButtonState ? (
        <CompletedWorkout />
      ) : (
        <>
          {workoutArray.length ? (
            <WorkoutList workoutList={workoutArray} setWorkoutName={setWorkoutName} />
          ) : (
            <Loader color="#aa00ff" />
          )}
        </>
      )}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserPage;
