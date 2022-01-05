import React, { useState, useEffect, useCallback } from 'react';
import './BaseTimer.css';

interface BaseTimerProps {
  duration: number;
  color: string;
  isPaused?: boolean;
  moveToNext: () => void;
}

const BaseTimer: React.FC<BaseTimerProps> = ({
  duration,
  color,
  isPaused,
  moveToNext,
}): JSX.Element => {
  const [timer, setTimer] = useState(duration);
  const onComplete = useCallback(() => {
    moveToNext();
  }, [moveToNext]);
  useEffect(() => {
    if (isPaused) {
      const myInterval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        }
      }, 1000);
      if (timer === 0) {
        onComplete();
      }
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [timer, isPaused, onComplete]);

  function calculateTimeFraction() {
    const rawTimeFraction = Number(((timer * 283) / duration).toFixed(0));
    if (rawTimeFraction - (duration - timer) > 0) {
      return rawTimeFraction - (duration - timer);
    } else {
      return 0;
    }
  }

  return (
    <div className="ExercisePage-BaseTimer">
      <svg
        className="ExercisePage-BaseTimer_svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="ExercisePage-BaseTimer_circle">
          <circle className="ExercisePage-BaseTimer_pathElapsed" cx="50" cy="50" r="45" />
          <path
            id="ExercisePage-BaseTimer_pathRemaining"
            strokeDasharray={`${calculateTimeFraction()} 283`}
            style={{
              color: color,
            }}
            className={`ExercisePage-BaseTimer_pathRemaining green`}
            d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
          ></path>
        </g>
      </svg>
      <span className="ExercisePage-BaseTimer_label" style={{ color: color }}>
        {timer}
      </span>
    </div>
  );
};

export default BaseTimer;
