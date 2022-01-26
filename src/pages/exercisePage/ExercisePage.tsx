import React, { useContext, useRef } from 'react';
import { ExerciseList } from '../../types/types';
import Control from './components/control/Control';
import './ExercisePage.css';
import Player from './components/player/Player';
import PlayPauseButton from './components/playPauseButton/PlayPauseButton';
import FinishWorkout from './components/finishWorkout/FinishWorkout';
import UserContext from '../../context/UserContext';
import useStatesExercisePage from '../../hooks/useStatesExercisePage.hook';

interface ExrPageProps {
  allExercises: Array<ExerciseList>;
  workoutName: string;
}

const ExercisePage: React.FC<ExrPageProps> = ({
  allExercises: allExercises,
  workoutName,
}): JSX.Element => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const { userData, logOut } = useContext(UserContext);
  const {
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
  } = useStatesExercisePage(allExercises);

  return (
    <div className="ExercisePage">
      <button className="UserPage-Button_logOut" onClick={logOut}>
        Log out from {userData.email}
      </button>
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
