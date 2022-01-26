import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import './UserPage.css';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData.hook';
import Loader from '../../components/loader/Loader';
import CompletedWorkout from './components/completedWorkout/CompletedWorkout';
import WorkoutList from '../../components/workoutList/WorkoutList';
import UserContext from '../../context/UserContext';

interface UserPageProps {
  setWorkoutName: Dispatch<SetStateAction<string>>;
}

const UserPage: React.FC<UserPageProps> = ({ setWorkoutName }): JSX.Element => {
  const [watchButtonState, setWatchButtonState] = useState(true);
  const { workoutList: workoutArray } = useFetchFirebaseData();
  const handleClickWatchWorkout = () => {
    watchButtonState ? setWatchButtonState(false) : setWatchButtonState(true);
  };
  const { userData, logOut } = useContext(UserContext);

  return (
    <div className="UserPage">
      <div className="UserPage-Div_buttonsContainer">
        <button className="UserPage-Button_logOut" onClick={logOut}>
          Log out from {userData.email}
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
