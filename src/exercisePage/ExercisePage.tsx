import React, { useEffect, useRef, useState } from 'react';
import { ExersiceType } from '../../src/types/types';
import Control from './control/Control';
import './ExercisePage.css';
import Player from './player/Player';
import PlayPauseButton from './buttons/PlayPauseButton';
import FinishWorkout from './finishWorkout/FinishWorkout';

interface ExrPageProps {
  allExr: Array<ExersiceType>;
}

const ExercisePage: React.FC<ExrPageProps> = ({ allExr }): JSX.Element => {
  const [url, setUrl] = useState<string>('');
  const [indexExr, setIndexExr] = useState(0);
  const [duration, setDuration] = useState(20);
  const [isReady, setIsReady] = useState(true);
  const [isPause, setIsPause] = useState(true);
  const [time, setTime] = useState(0);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (allExr.length && indexExr < allExr.length) {
      setDuration(allExr[indexExr].duration);
      setUrl(allExr[indexExr].video);
    }
  }, [allExr, indexExr]);

  function changeReadyState() {
    if (isReady) {
      setIsReady(false);
    } else {
      setIsReady(true);
    }
  }

  function moveToNextIndex() {
    if (allExr.length > indexExr) {
      setIndexExr(indexExr + 1);
    }
    if (allExr.length - 1 > indexExr) {
      changeReadyState();
      setTime(time + duration);
    }
  }

  function moveToPrevIndex() {
    if (indexExr > 0) {
      setIndexExr(indexExr - 1);
    }
  }

  return (
    <div className="exercisePage">
      {indexExr === 21 ? (
        <FinishWorkout time={time} />
      ) : (
        <>
          <Control
            moveToNext={moveToNextIndex}
            moveToPrev={moveToPrevIndex}
            index={indexExr}
            duration={duration}
            id={allExr[indexExr]?.id || 0}
            caption={allExr[indexExr]?.title}
            amountExr={allExr.length}
            setReady={changeReadyState}
            isReady={isReady}
            isPause={isPause}
          />
          {isReady ? (
            <div className="loophole" />
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
