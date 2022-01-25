import React, { useState, ChangeEvent } from 'react';
import './AdminPage.css';
import { Workout } from '../../types/types';
import AdminExercisesList from './components/adminExerciseList/AdminExerciseList';
import WorkoutList from '../../components/workoutList/WorkoutList';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData';
import Modal from '../../components/modal/Modal';
import { uploadDataToFirestore } from '../../helpers/uploadDataToFirestore';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeUser } from '../../store/slices/userSlice';

interface AdminPageProps {
  exerciseArr: Workout[];
}

const AdminPage: React.FC<AdminPageProps> = ({ exerciseArr }): JSX.Element => {
  const [workoutArray, setWorkoutArray] = useState<Array<Workout>>([]);
  const [workoutNameInput, setWorkoutNameInput] = useState('');
  const [watchButtonState, setWatchButtonState] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState('');
  const { workoutList, setIsDelete } = useFetchFirebaseData();
  const { email } = useAuth();
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkoutNameInput(event.currentTarget.value);
  };

  const setExerciseWorkoutArray = (exerciseCollectionsArray: Array<Workout>) => {
    setWorkoutArray(exerciseCollectionsArray);
  };

  const handleClickWatchWorkout = () => {
    setIsDelete(true);
    watchButtonState ? setWatchButtonState(false) : setWatchButtonState(true);
  };

  const handleClickCreateWorkout = () => {
    uploadDataToFirestore(workoutArray, workoutNameInput);
    alert('workout created');
  };

  return (
    <div className="AdminPage">
      <div className="AdminPage-Div_buttonsContainer">
        <button className="UserPage-Button_logOut" onClick={() => dispatch(removeUser())}>
          Log out from {email}
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
          <Modal
            setIsDelete={setIsDelete}
            workoutArray={workoutArray}
            workoutList={workoutList}
            workoutName={workoutName}
            exerciseListArr={exerciseArr}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            setExerciseWorkoutArray={setExerciseWorkoutArray}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPage;
