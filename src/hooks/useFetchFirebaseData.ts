import { useEffect, useState } from 'react';
import { Workout, ExerciseList } from '../types/types';
import { dataBase } from '../firebase/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

const useFetchFirebaseData = (): Array<Workout> => {
  const [workoutList, setWorkoutList] = useState<Array<string>>([]);
  const [exercisesMap, setExercisesMap] = useState<Record<string, ExerciseList[]>>({});

  useEffect(() => {
    const exerciseViewCollection = query(collection(dataBase, 'workout'));
    onSnapshot(exerciseViewCollection, (querySnapshot) => {
      const workoutArray: string[] = [];
      querySnapshot.forEach((exerciseViewItem) => {
        const exercisesArray: Array<ExerciseList> = [];
        const title = exerciseViewItem.data().title;

        exerciseViewItem.data().collection.forEach(async (item: string) => {
          const exerciseViewCollection = query(
            collection(dataBase, `workout`, exerciseViewItem.data().title, `${item}`)
          );
          onSnapshot(exerciseViewCollection, (snapshot) => {
            snapshot.forEach((item) => {
              exercisesArray.push(item.data() as ExerciseList);
            });

            setExercisesMap((previousValue) => ({
              ...previousValue,
              [title]: (previousValue[title] || []).concat(exercisesArray),
            }));
          });
        });

        workoutArray.push(title);
      });

      setWorkoutList(workoutArray);
    });
  }, []);

  return workoutList.map((workoutItem) => ({
    title: workoutItem,
    exercises: exercisesMap[workoutItem] || [],
  }));
};

export default useFetchFirebaseData;
