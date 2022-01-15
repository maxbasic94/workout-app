import React from 'react';
import './AdminPage.css';
import { Workout } from '../../types/types';
import AdminExercisesList from './components/adminExerciseList/AdminExerciseList';

interface AdminPageProps {
  exerciseArr: Workout[];
}

const AdminPage: React.FC<AdminPageProps> = ({ exerciseArr }): JSX.Element => {
  console.log(exerciseArr);

  return (
    <div className="AdminPage">
      <div className="AdminPage-inputContainer">
        <h1>Admin Page</h1>
        <input className="AdminPage-input_workoutName" type="text" />
      </div>
      <div className="AdminPage-div_exerciseContainer">
        <AdminExercisesList exerciseListArr={exerciseArr} />
      </div>
      <div className="AdminPage-div_buttonContainer">
        <button className="AdminPage-button_createWorkout">Create Workout</button>
      </div>
    </div>
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
