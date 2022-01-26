import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { dataBase } from '../firebase/firebase';
import { Workout, ExerciseList } from '../types/types';

interface UserStartPageDataInterface {
  exerciseArr: Array<Workout>;
}

const useStartPageData = (
  workoutName: string,
  setExerciseArray: Dispatch<SetStateAction<ExerciseList[]>>
): UserStartPageDataInterface => {
  const [exerciseArr, setExerciseArr] = useState<Workout[]>([]);
  const getAllExerciseArray = (allExerciseArray: Array<Workout> | undefined) => {
    const resultArr: Array<ExerciseList> = [];
    allExerciseArray?.forEach((item: Workout) => {
      item.exercises.forEach((exr: ExerciseList) => {
        resultArr.push(exr);
      });
    });
    return resultArr;
  };

  useEffect(() => {
    if (workoutName) {
      const workoutCollection = collection(dataBase, `workout`);
      onSnapshot(doc(workoutCollection, `${workoutName}`), (querySnapshot) => {
        const workoutArray: Array<Workout> = [];
        querySnapshot.data()?.collection.forEach((item: string) => {
          const exercisesArray: Array<ExerciseList> = [];
          const exerciseViewCollection = query(
            collection(dataBase, `workout`, `${workoutName}`, `${item}`)
          );
          onSnapshot(exerciseViewCollection, (querySnapshot) => {
            querySnapshot.forEach((item) => {
              exercisesArray.push(item.data() as ExerciseList);
            });
            const exerciseViewObject = {
              title: item,
              exercises: exercisesArray,
            };
            exerciseViewObject.title === 'Warm up'
              ? workoutArray.unshift(exerciseViewObject)
              : workoutArray.push(exerciseViewObject);
            const allExerciseArray = getAllExerciseArray(workoutArray);
            setExerciseArray(allExerciseArray);
            setExerciseArr(workoutArray);
          });
        });
      });
    }
  }, [workoutName, setExerciseArray]);
  return { exerciseArr };
};

export default useStartPageData;
