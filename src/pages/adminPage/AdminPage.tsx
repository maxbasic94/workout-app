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

interface AdminPageProps {
  exerciseArr: Workout[];
}

const AdminPage: React.FC<AdminPageProps> = ({ exerciseArr }): JSX.Element => {
  const [workoutArray, setWorkoutArray] = useState<Array<Workout>>([]);
  const [workoutNameInput, setWorkoutNameInput] = useState('');
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();

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

  async function handleClick() {
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
  }

  return isAuth ? (
    <div className="AdminPage">
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
      <div className="AdminPage-inputContainer">
        <h1>Admin Page</h1>
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
        <button className="AdminPage-button_createWorkout" onClick={handleClick}>
          Create Workout
        </button>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminPage;

// import { dataBase } from '../../firebase/firebase';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { Workout, ExerciseList } from '../../types/types';
// import { collection, getDocs } from 'firebase/firestore';
// import { dataBase } from '../../firebase/firebase';

//   const exerciseViewCollection = query(collection(dataBase, 'api'));
//   const workoutArray: Array<Workout> = [];
//   onSnapshot(exerciseViewCollection, (querySnapshot) => {
//     querySnapshot.forEach((ExerciseViewItem) => {
//       console.log(ExerciseViewItem.data());

//       const documentsCollection = query(
//         collection(dataBase, 'api', `${ExerciseViewItem.data().title}`, 'exercises')
//       );
//       const exercisesArray: Array<ExerciseList> = [];

//       onSnapshot(documentsCollection, (querySnapshot2) => {
//         querySnapshot2.forEach((item) => {
//           const exercise = item.data() as ExerciseList;
//           exercisesArray.push(exercise);
//         });
//       });
//       const exerciseViewObject = {
//         title: ExerciseViewItem.data().title,
//         exercises: exercisesArray,
//       };
//       workoutArray.push(exerciseViewObject);
//     });
//     console.log(workoutArray);
//   });

//   async function getExerciseViewArray(exerciseViewTitle: string) {
//     const exercisesArray: Array<ExerciseList> = [];
//     const docRef = collection(dataBase, 'api', `${exerciseViewTitle}`, 'exercises');
//     const docSnap = await getDocs(docRef);
//     docSnap.forEach((item) => {
//       const exercise = item.data() as ExerciseList;
//       exercisesArray.push(exercise);
//     });
//     return exercisesArray;
//   }

//   (async function () {
//     const exerciseViewCollection = collection(dataBase, 'api');
//     const exerciseViewReference = await getDocs(exerciseViewCollection);
//     const workoutArray: Array<Workout> = [];
//     exerciseViewReference.forEach(async (item) => {
//       const exerciseViewObject = {
//         title: item.data().title,
//         exercises: await getExerciseViewArray(item.data().title),
//       };
//       exerciseViewObject.title === 'Warm up'
//         ? workoutArray.unshift(exerciseViewObject)
//         : workoutArray.push(exerciseViewObject);
//     });
//     console.log(workoutArray);
//   })();
