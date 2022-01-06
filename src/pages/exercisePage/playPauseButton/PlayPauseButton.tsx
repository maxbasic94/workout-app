import React, { Dispatch, RefObject, SetStateAction, useState } from 'react';
import play from './play.png';
import pause from './pause.png';
import './PlayPauseButton.css';

interface PlayPauseButtonProps {
  playerRef: RefObject<HTMLVideoElement>;
  setPause: Dispatch<SetStateAction<boolean>>;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ playerRef, setPause }): JSX.Element => {
  const [state, setState] = useState(pause);

  function changeProperties() {
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
    <div className="ExercisePage-PlayPauseButton_container">
      <hr />
      <button className="ExercisePage-PlayPauseButton_button_playPause" onClick={changeProperties}>
        <img src={state}></img>
      </button>
    </div>
  );
};

export default PlayPauseButton;
