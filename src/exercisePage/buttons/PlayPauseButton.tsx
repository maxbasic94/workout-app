import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import play from './images/play.png';
import pause from './images/pause.png';
import './PlayPauseButton.css';

interface PlayPauseBtnProps {
  playerRef: RefObject<HTMLVideoElement>;
  setPause: Dispatch<SetStateAction<boolean>>;
}

const PlayPauseButton: React.FC<PlayPauseBtnProps> = ({ playerRef, setPause }): JSX.Element => {
  const [state, setState] = useState(pause);

  function testFunction() {
    if (playerRef.current !== null) {
      if (state === play) {
        playerRef?.current.play();
        setState(pause);
        setPause(true);
      } else {
        setState(play);
        playerRef?.current.pause();
        setPause(false);
      }
    }
  }

  return (
    <div className="playPauseBtnDiv">
      <hr />
      <button className="playPauseButton" onClick={testFunction}>
        <img src={state}></img>
      </button>
    </div>
  );
};

export default PlayPauseButton;
