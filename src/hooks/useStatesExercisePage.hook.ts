import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ExerciseList } from '../types/types';

interface UseStatesExercisePageInterface {
  url: string;
  isPause: boolean;
  moveToNextIndex: () => void;
  moveToPrevIndex: () => void;
  indexExercise: number;
  time: number;
  duration: number;
  isReady: boolean;
  setIsPause: Dispatch<SetStateAction<boolean>>;
  changeReadyState: () => void;
}

const useStatesExercisePage = (
  allExercises: Array<ExerciseList>
): UseStatesExercisePageInterface => {
  const [url, setUrl] = useState<string>('');
  const [indexExercise, setIndexExercise] = useState(0);
  const [duration, setDuration] = useState(20);
  const [isReady, setIsReady] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (allExercises.length && indexExercise < allExercises.length) {
      setDuration(allExercises[indexExercise].duration);
      setUrl(allExercises[indexExercise].video);
    }
  }, [allExercises, indexExercise]);

  const changeReadyState = () => {
    isReady ? setIsReady(false) : setIsReady(true);
  };

  const moveToNextIndex = () => {
    if (allExercises.length > indexExercise) {
      setIndexExercise(indexExercise + 1);
    }
    if (allExercises.length - 1 > indexExercise) {
      changeReadyState();
      setTime(time + duration);
    }
    setIsPause(true);
  };

  const moveToPrevIndex = () => {
    if (indexExercise > 0) {
      setIndexExercise(indexExercise - 1);
      setTime(time - duration);
      changeReadyState();
    }
    setIsPause(true);
  };

  return {
    url,
    isPause,
    setIsPause,
    moveToNextIndex,
    moveToPrevIndex,
    indexExercise,
    time,
    duration,
    isReady,
    changeReadyState,
  };
};

export default useStatesExercisePage;
