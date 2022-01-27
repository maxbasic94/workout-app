import { useEffect, useState } from 'react';
import { ExerciseList, Workout } from '../types/types';

interface UseAdminExerciseViewDataInterface {
  setIdToArray: (exercise: ExerciseList) => void;
  removeIdToArray: (id: number) => void;
}

const useAdminExerciseViewData = (
  setExerciseViewToWorkoutArray: (exerciseViewObject: Workout) => void,
  exerciseList: Workout
): UseAdminExerciseViewDataInterface => {
  const [exerciseArray, setExerciseArray] = useState<Array<ExerciseList>>([]);
  const [exerciseViewObject, setExerciseViewObject] = useState<Workout>({
    title: `${exerciseList.title}`,
    exercises: [],
  });
  const setIdToArray = (exercise: ExerciseList) => {
    setExerciseArray((oldValue) => [...oldValue, exercise]);
    setExerciseViewToWorkoutArray(exerciseViewObject);
  };
  const removeIdToArray = (id: number) => {
    const newExerciseArray = exerciseArray.filter((item) => item.id !== id);
    setExerciseArray(newExerciseArray);
    setExerciseViewToWorkoutArray(exerciseViewObject);
  };
  useEffect(() => {
    const newExerciseViewObject = exerciseViewObject;
    newExerciseViewObject.exercises = exerciseArray;
    setExerciseViewObject(newExerciseViewObject);
  }, [exerciseArray, exerciseViewObject]);

  return { setIdToArray, removeIdToArray };
};

export default useAdminExerciseViewData;
