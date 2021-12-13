import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const WaitTimer: React.FC = (): JSX.Element => {
  return (
    <div className="exerTimerDiv">
      <div className="timerCaption">Get Ready</div>
      <CountdownCircleTimer
        isPlaying
        duration={5}
        colors={'#1DE9B6'}
        size={128}
        onComplete={() => {
          //   moveToNext();
          console.log('here');
        }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default WaitTimer;
