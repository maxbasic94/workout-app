import React, { useEffect, useState } from 'react';
import { ExersiceType } from '../../src/types/types';
import Control from './control/Control';
import './ExercisePage.css';
import Player from './player/Player';
// import PlayPauseButton from './buttons/PlayPauseButton';

interface ExrPageProps {
  allExr: Array<ExersiceType>;
}

const ExercisePage: React.FC<ExrPageProps> = ({ allExr }): JSX.Element => {
  const [url, setUrl] = useState<string>('');
  const [indexExr, setIndexExr] = useState(0);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    console.log(indexExr);
    if (allExr.length) {
      setDuration(allExr[indexExr].duration);
      setUrl(allExr[indexExr].video);
    }
  }, [allExr, indexExr]);

  function moveToNextIndex() {
    console.log('here');
    console.log(allExr);
    if (allExr.length - 1 > indexExr) {
      setIndexExr(indexExr + 1);
    }
  }

  function moveToPrevIndex() {
    if (indexExr > 0) {
      setIndexExr(indexExr - 1);
    }
  }

  return (
    <div className="exercisePage">
      <Control
        moveToNext={moveToNextIndex}
        moveToPrev={moveToPrevIndex}
        index={indexExr}
        duration={duration}
        id={allExr[indexExr]?.id || 0}
        caption={allExr[indexExr]?.title}
      />
      <Player url={url} />
      {/* <PlayPauseButton /> */}
    </div>
  );
};

export default ExercisePage;
