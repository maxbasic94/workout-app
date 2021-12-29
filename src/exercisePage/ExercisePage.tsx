import React, { useEffect, useRef, useState } from 'react';
import { ExerciseType } from '../../src/types/types';
import Control from './control/Control';
import './ExercisePage.css';
import Player from './player/Player';
import PlayPauseButton from './buttons/PlayPauseButton';
import FinishWorkout from './finishWorkout/FinishWorkout';

interface ExrPageProps {
  allExercises: Array<ExerciseType>;
}

const ExercisePage: React.FC<ExrPageProps> = ({ allExercises: allExercises }): JSX.Element => {
  const [url, setUrl] = useState<string>('');
  const [indexExr, setIndexExr] = useState(0);
  const [duration, setDuration] = useState(20);
  const [isReady, setIsReady] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [time, setTime] = useState(0);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (allExercises.length && indexExr < allExercises.length) {
      setDuration(allExercises[indexExr].duration);
      setUrl(allExercises[indexExr].video);
    }
  }, [allExercises, indexExr]);

  function changeReadyState() {
    if (isReady) {
      setIsReady(false);
    } else {
      setIsReady(true);
    }
  }

  function moveToNextIndex() {
    if (allExercises.length > indexExr) {
      setIndexExr(indexExr + 1);
    }
    if (allExercises.length - 1 > indexExr) {
      changeReadyState();
      setTime(time + duration);
    }
  }

  function moveToPrevIndex() {
    if (indexExr > 0) {
      setIndexExr(indexExr - 1);
      setTime(time - duration);
      changeReadyState();
    }
  }

  return (
    <div className="ExercisePage">
      {indexExr === allExercises.length && allExercises.length ? (
        <FinishWorkout time={time} />
      ) : (
        <>
          <Control
            moveToNext={moveToNextIndex}
            moveToPrev={moveToPrevIndex}
            index={indexExr}
            duration={duration}
            id={allExercises[indexExr]?.id || 0}
            caption={allExercises[indexExr]?.title}
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
