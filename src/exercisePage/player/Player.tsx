import React from 'react';
import './Player.css';

interface PlayerProps {
  url: string;
}

const Player: React.FC<PlayerProps> = ({ url }): JSX.Element => {
  return (
    <div className="playerDiv">
      <video className="video" src={url} playsInline autoPlay muted loop></video>
    </div>
  );
};

export default Player;
