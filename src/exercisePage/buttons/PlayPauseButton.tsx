import React, { useState } from 'react';
import play from './images/play.png';
import pause from './images/pause.png';

const PlayPauseButton: React.FC = (): JSX.Element => {
  const [state, setState] = useState(play);

  function testFunction() {
    if (state === play) {
      setState(pause);
    } else {
      setState(play);
    }
  }

  return (
    <button onClick={testFunction}>
      <img src={state}></img>
    </button>
  );
};

export default PlayPauseButton;
