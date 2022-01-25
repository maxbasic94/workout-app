import React, { Dispatch, SetStateAction, useState } from 'react';
import './UserPage.css';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData';
import Loader from '../../components/loader/Loader';
import CompletedWorkout from './components/completedWorkout/CompletedWorkout';
import WorkoutList from '../../components/workoutList/WorkoutList';

interface UserPageProps {
  setWorkoutName: Dispatch<SetStateAction<string>>;
}

const UserPage: React.FC<UserPageProps> = ({ setWorkoutName }): JSX.Element => {
  const [watchButtonState, setWatchButtonState] = useState(true);
  const { email } = useAuth();
  const dispatch = useAppDispatch();
  const { workoutList: workoutArray } = useFetchFirebaseData();
  const handleClickWatchWorkout = () => {
    watchButtonState ? setWatchButtonState(false) : setWatchButtonState(true);
  };

  return (
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
            <WorkoutList
              workoutList={workoutArray}
              setWorkoutName={setWorkoutName}
              isAdminPage={false}
            />
          ) : (
            <Loader color="#aa00ff" />
          )}
        </>
      )}
    </div>
  );
};

export default UserPage;
