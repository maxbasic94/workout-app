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
      querySnapshot.forEach((exerciseViewItem) => {
        const exercisesArray: Array<ExerciseList> = [];
        exerciseViewItem.data().collection.forEach((item: string) => {
          const exerciseViewCollection = query(
            collection(dataBase, `workout`, exerciseViewItem.data().title, `${item}`)
          );
          onSnapshot(exerciseViewCollection, (snapshot) => {
            snapshot.forEach((item) => {
              exercisesArray.push(item.data() as ExerciseList);
            });
          });
        });
        workoutArray.push({
          title: exerciseViewItem.data().title,
          exercises: exercisesArray,
        });
      });
    });
    setTimeout(() => {
      setWorkoutList(workoutArray);
    }, 1000);
  }, []);

  return workoutList;
};

export default useFetchFirebaseData;
