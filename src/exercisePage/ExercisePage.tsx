import React, { useEffect, useState } from 'react';
import { ExersiceType } from '../../src/types/types';
import Timer from './timer/Timer';
import './ExercisePage.css';
import Player from './player/Player';
// import PlayPauseButton from './buttons/PlayPauseButton';

interface ExrPageProps {
  allExr: Array<ExersiceType>;
}

const ExercisePage: React.FC<ExrPageProps> = ({ allExr }): JSX.Element => {
  const [url, setUrl] = useState<string>('');
  const [indexExr, setIndexExr] = useState(0);

  useEffect(() => {
    if (allExr.length) {
      setUrl(allExr[indexExr].video);
    }
  }, [allExr, indexExr]);

  function moveToNextIndex() {
    if (allExr.length - 1 > indexExr) {
      setIndexExr(indexExr + 1);
    }
  }

  function moveToPrevIndex() {
    if (indexExr > 0) {
      setIndexExr(indexExr - 1);
    }
  }

  function setFirstUrl() {
    console.log('test');
  }

  return (
    <div className="exercisePage">
      <Timer
        moveToNext={moveToNextIndex}
        moveToPrev={moveToPrevIndex}
        setFirstUrl={setFirstUrl}
        index={indexExr}
      />
      <Player url={url} />
      {/* <PlayPauseButton /> */}
    </div>
  );
};

export default ExercisePage;
