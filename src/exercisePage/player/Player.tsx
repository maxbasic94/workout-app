import React, { LegacyRef } from 'react';
import './Player.css';

interface PlayerProps {
  url: string;
  playerRef?: LegacyRef<HTMLVideoElement>;
}

const Player: React.FC<PlayerProps> = ({ url, playerRef }): JSX.Element => {
  return (
    <div className="ExercisePage-Player_container">
      <video
        ref={playerRef}
        className="ExercisePage-Player_video"
        src={url}
        playsInline
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Player;
