import { collection, onSnapshot, query } from 'firebase/firestore';
import { dataBase } from '../firebase/firebase';
import { Workout, ExerciseList } from '../types/types';

export const getStartingData = (): Array<Workout> => {
  const exerciseViewCollection = query(collection(dataBase, 'api'));
  const workoutArray: Array<Workout> = [];
  onSnapshot(exerciseViewCollection, (querySnapshot) => {
    querySnapshot.forEach((ExerciseViewItem) => {
      const documentsCollection = query(
        collection(dataBase, 'api', `${ExerciseViewItem.data().title}`, 'exercises')
      );
      const exercisesArray: Array<ExerciseList> = [];

      onSnapshot(documentsCollection, (querySnapshot2) => {
        querySnapshot2.forEach((item) => {
          const exercise = item.data() as ExerciseList;
          exercisesArray.push(exercise);
        });
      });
      const exerciseViewObject = {
        title: ExerciseViewItem.data().title,
        exercises: exercisesArray,
      };
      exerciseViewObject.title === 'Warm up'
        ? workoutArray.unshift(exerciseViewObject)
        : workoutArray.push(exerciseViewObject);
    });
  });
  return workoutArray;
};
