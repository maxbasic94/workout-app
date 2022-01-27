import { ChangeEvent, useState } from 'react';
import { Workout } from '../types/types';
import { uploadDataToFirestore } from '../helpers/uploadDataToFirestore';
import useFetchFirebaseData from './useFetchFirebaseData.hook';

interface useAdminPageDataInterface {
  workoutArray: Array<Workout>;
  watchButtonState: boolean;
  workoutNameInput: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setExerciseWorkoutArray: (exerciseCollectionsArray: Array<Workout>) => void;
  handleClickWatchWorkout: () => void;
  handleClickCreateWorkout: () => void;
}

const useAdminPageData = (): useAdminPageDataInterface => {
  const [workoutArray, setWorkoutArray] = useState<Array<Workout>>([]);
  const [workoutNameInput, setWorkoutNameInput] = useState('');
  const [watchButtonState, setWatchButtonState] = useState(true);
  const { setIsDelete } = useFetchFirebaseData();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWorkoutNameInput(event.currentTarget.value);
  };

  const setExerciseWorkoutArray = (exerciseCollectionsArray: Array<Workout>) => {
    setWorkoutArray(exerciseCollectionsArray);
  };

  const handleClickWatchWorkout = () => {
    setIsDelete(true);
    watchButtonState ? setWatchButtonState(false) : setWatchButtonState(true);
  };

  const handleClickCreateWorkout = () => {
    uploadDataToFirestore(workoutArray, workoutNameInput);
  };

  return {
    workoutArray,
    watchButtonState,
    workoutNameInput,
    handleChange,
    setExerciseWorkoutArray,
    handleClickWatchWorkout,
    handleClickCreateWorkout,
  };
};

export default useAdminPageData;
