import React, { useState, useContext } from 'react';
import './AdminPage.css';
import { Workout } from '../../types/types';
import AdminExercisesList from './components/adminExerciseList/AdminExerciseList';
import WorkoutList from '../../components/workoutList/WorkoutList';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData.hook';
import UserContext from '../../context/UserContext';
import AdminModal from './components/adminModal/AdminModal';
import useAdminPageData from '../../hooks/useAdminPageData.hook';

interface AdminPageProps {
  exerciseArr: Workout[];
}

const AdminPage: React.FC<AdminPageProps> = ({ exerciseArr }): JSX.Element => {
  const {
    workoutArray,
    watchButtonState,
    workoutNameInput,
    handleChange,
    setExerciseWorkoutArray,
    handleClickWatchWorkout,
    handleClickCreateWorkout,
  } = useAdminPageData();
  const [isOpen, setIsOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState('');
  const { workoutList, setIsDelete } = useFetchFirebaseData();
  const { userData, logOut } = useContext(UserContext);

  return (
    <div className="AdminPage">
      <div className="AdminPage-Div_buttonsContainer">
        <button className="UserPage-Button_logOut" onClick={logOut}>
          Log out from {userData.email}
        </button>
        <button className="AdminPage-Button_watchWorkout" onClick={handleClickWatchWorkout}>
          {watchButtonState ? `Watch workouts` : `Create new workout`}
        </button>
      </div>
      <h1>Admin Page</h1>
      {watchButtonState ? (
        <>
          <div className="AdminPage-inputContainer">
            <input
              className="AdminPage-input_workoutName"
              type="text"
              value={workoutNameInput}
              onChange={handleChange}
              placeholder="Enter workout's name"
            />
          </div>
          <div className="AdminPage-div_exerciseContainer">
            <AdminExercisesList
              isModal={false}
              exerciseListArr={exerciseArr}
              setExerciseWorkoutArray={setExerciseWorkoutArray}
            />
          </div>
          <div className="AdminPage-div_buttonContainer">
            <button className="AdminPage-button_createWorkout" onClick={handleClickCreateWorkout}>
              Create Workout
            </button>
          </div>
        </>
      ) : (
        <div className="AdminPage-WorkoutList">
          <h3>Workout list</h3>
          <WorkoutList
            workoutList={workoutList}
            isAdminPage={true}
            setIsOpen={setIsOpen}
            setWorkoutName={setWorkoutName}
            setIsDelete={setIsDelete}
          />
          <AdminModal
            setIsDelete={setIsDelete}
            workoutArray={workoutArray}
            workoutList={workoutList}
            workoutName={workoutName}
            exerciseListArr={exerciseArr}
            open={isOpen}
            onClose={setIsOpen}
            setExerciseWorkoutArray={setExerciseWorkoutArray}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPage;
