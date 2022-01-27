import { useEffect, useState, ChangeEvent } from 'react';
import { ExerciseList } from '../types/types';

interface UseAdminExerciseDataInterface {
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useAdminExerciseData = (
  checkedExerciseList: Array<ExerciseList> | undefined,
  exercise: ExerciseList,
  setIdToArray: (exercise: ExerciseList) => void,
  removeIdToArray: (id: number) => void
): UseAdminExerciseDataInterface => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.checked);
    event.currentTarget.checked ? setIdToArray(exercise) : removeIdToArray(exercise.id);
  };
  useEffect(() => {
    checkedExerciseList &&
      checkedExerciseList.forEach((item) => {
        item.id === exercise.id && setIsChecked(true);
      });
  }, [checkedExerciseList, exercise.id]);

  return { isChecked, handleChange };
};

export default useAdminExerciseData;
