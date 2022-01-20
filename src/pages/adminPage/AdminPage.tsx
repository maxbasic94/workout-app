import React, { useState, ChangeEvent } from 'react';
import './AdminPage.css';
import { Workout } from '../../types/types';
import { removeUser } from '../../store/slices/userSlice';
import AdminExercisesList from './components/adminExerciseList/AdminExerciseList';
import { dataBase } from '../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import WorkoutList from '../../components/workoutList/WorkoutList';
import useFetchFirebaseData from '../../hooks/useFetchFirebaseData';

interface AdminPageProps {
  exerciseArr: Workout[];
}

const AdminPage: React.FC<AdminPageProps> = ({ exerciseArr }): JSX.Element => {
  const [workoutArray, setWorkoutArray] = useState<Array<Workout>>([]);
  const [workoutNameInput, setWorkoutNameInput] = useState('');
  const [watchButtonState, setWatchButtonState] = useState(true);
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  const workoutList = useFetchFirebaseData();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkoutNameInput(event.currentTarget.value);
  };

  const removeEmptyArray = (currentArray: Array<Workout>) => {
    const resultArray = currentArray;
    currentArray.forEach((item, index) => {
      if (item.exercises.length === 0) {
        resultArray.splice(index, 1);
      }
    });
    return resultArray;
  };

  const setExerciseWorkoutArray = (exerciseCollectionsArray: Array<Workout>) => {
    setWorkoutArray(exerciseCollectionsArray);
  };

  const handleClickCreateWorkout = async () => {
    try {
      const setArray = removeEmptyArray(workoutArray);
      const collectionArray: Array<string> = [];
      if (workoutNameInput && workoutArray.length > 0) {
        setArray.forEach(async (item) => {
          collectionArray.push(`${item.title}`);
          const workoutDoc = doc(dataBase, `workout`, `${workoutNameInput}`);
          await setDoc(workoutDoc, { title: workoutNameInput, collection: collectionArray });
          item.exercises.forEach(async (elem) => {
            await setDoc(
              doc(workoutDoc, `${item.title}`, `exercise${elem.id}`),
              {
                id: elem.id,
                duration: elem.duration,
                description: elem.description,
                photo: elem.photo,
                title: elem.title,
                video: elem.video,
              },
              { merge: true }
            );
          });
        });
        alert('workout send to firestore');
      } else {
        throw new Error(`empty workout's name or exercise list!`);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleClickWatchWorkout = () => {
    watchButtonState ? setWatchButtonState(false) : setWatchButtonState(true);
  };

  return isAuth ? (
    <div className="AdminPage">
      <div className="AdminPage-Div_buttonsContainer">
        <button className="AdminPage-Button_logOut" onClick={() => dispatch(removeUser())}>
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
          <WorkoutList workoutList={workoutList} isAdminPage={true} />
        </div>
      )}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminPage;
