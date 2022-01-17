import { useEffect, useState } from 'react';
import { Workout, ExerciseList } from '../types/types';
import { dataBase } from '../firebase/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

const useFetchFirebaseData = (): Array<Workout> => {
  const [workoutList, setWorkoutList] = useState<Array<Workout>>([]);

  useEffect(() => {
    const workoutArray: Array<Workout> = [];
    const exerciseViewCollection = query(collection(dataBase, 'workout'));
    onSnapshot(exerciseViewCollection, (querySnapshot) => {
      querySnapshot.forEach(async (exerciseViewItem) => {
        const exercisesArray: Array<ExerciseList> = [];
        const exerciseViewArray: Array<string> = exerciseViewItem.data().collection;
        exerciseViewArray.forEach((item) => {
          const exerciseViewCollection = query(
            collection(dataBase, `workout`, exerciseViewItem.data().title, `${item}`)
          );
          onSnapshot(exerciseViewCollection, (snapshot) => {
            snapshot.forEach((item) => {
              const exercise = item.data() as ExerciseList;
              exercisesArray.push(exercise);
            });
          });
        });
        const exerciseViewObject = {
          title: exerciseViewItem.data().title,
          exercises: exercisesArray,
        };
        workoutArray.push(exerciseViewObject);
      });
    });
    setWorkoutList(workoutArray);
  }, []);

  return workoutList;
};

export default useFetchFirebaseData;
