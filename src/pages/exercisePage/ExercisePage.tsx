import React, { useEffect, useRef, useState } from 'react';
import { ExerciseList } from '../../types/types';
import Control from './components/control/Control';
import './ExercisePage.css';
import Player from './components/player/Player';
import PlayPauseButton from './components/playPauseButton/PlayPauseButton';
import FinishWorkout from './components/finishWorkout/FinishWorkout';

interface ExrPageProps {
  allExercises: Array<ExerciseList>;
  workoutName: string;
}

const ExercisePage: React.FC<ExrPageProps> = ({
  allExercises: allExercises,
  workoutName,
}): JSX.Element => {
  const [url, setUrl] = useState<string>('');
  const [indexExercise, setIndexExercise] = useState(0);
  const [duration, setDuration] = useState(20);
  const [isReady, setIsReady] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [time, setTime] = useState(0);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (allExercises.length && indexExercise < allExercises.length) {
      setDuration(allExercises[indexExercise].duration);
      setUrl(allExercises[indexExercise].video);
    }
  }, [allExercises, indexExercise]);

  function changeReadyState() {
    if (isReady) {
      setIsReady(false);
    } else {
      setIsReady(true);
    }
  }

  function moveToNextIndex() {
    if (allExercises.length > indexExercise) {
      setIndexExercise(indexExercise + 1);
    }
    if (allExercises.length - 1 > indexExercise) {
      changeReadyState();
      setTime(time + duration);
    }
    setIsPause(true);
  }

  function moveToPrevIndex() {
    if (indexExercise > 0) {
      setIndexExercise(indexExercise - 1);
      setTime(time - duration);
      changeReadyState();
    }
    setIsPause(true);
  }

  return (
    <div className="ExercisePage">
      {indexExercise === allExercises.length && allExercises.length ? (
        <FinishWorkout time={time} workoutName={workoutName} />
      ) : (
        <>
          <Control
            moveToNext={moveToNextIndex}
            moveToPrev={moveToPrevIndex}
            index={indexExercise}
            duration={duration}
            id={allExercises[indexExercise]?.id || 0}
            caption={allExercises[indexExercise]?.title}
            amountExercise={allExercises.length}
            setReady={changeReadyState}
            isReady={isReady}
            isPause={isPause}
          />
          {isReady ? (
            <div className="ExercisePage_loophole" />
          ) : (
            <>
              <Player playerRef={playerRef} url={url} />
              <PlayPauseButton playerRef={playerRef} setPause={setIsPause} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ExercisePage;
