import React, { useState } from 'react';
import play from './images/play.png';
import pause from './images/pause.png';
import './PlayPauseButton.css';

const PlayPauseButton: React.FC = (): JSX.Element => {
  const [state, setState] = useState(pause);

  function testFunction() {
    if (state === play) {
      setState(pause);
    } else {
      setState(play);
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
