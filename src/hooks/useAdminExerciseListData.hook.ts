import { useState } from 'react';
import { Workout } from '../types/types';

interface UseAdminExerciseListDataInterface {
  setExerciseViewToWorkoutArray: (exerciseViewObject: Workout) => void;
}

const useAdminExerciseListData = (
  setExerciseWorkoutArray: ((exerciseCollectionsArray: Array<Workout>) => void) | undefined
): UseAdminExerciseListDataInterface => {
  const [workoutArray, setWorkoutArray] = useState<Array<Workout>>([]);
  const setExerciseViewToWorkoutArray = (exerciseViewObject: Workout) => {
    const result = workoutArray;
    if (workoutArray.length === 0) {
      result.push(exerciseViewObject);
    } else {
      let elementFount = false;
      workoutArray.forEach((item, index) => {
        if (item.title === exerciseViewObject.title) {
          result[index] = exerciseViewObject;
          elementFount = true;
        }
      });
      if (!elementFount) {
        exerciseViewObject.title === 'Warm up'
          ? workoutArray.unshift(exerciseViewObject)
          : workoutArray.push(exerciseViewObject);
      }
    }
    setWorkoutArray(result);
    if (setExerciseWorkoutArray) {
      setExerciseWorkoutArray(workoutArray);
    }
  };

  return { setExerciseViewToWorkoutArray };
};

export default useAdminExerciseListData;
