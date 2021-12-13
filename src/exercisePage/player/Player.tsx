import React from 'react';
import './Player.css';

interface PlayerProps {
  url: string;
}

const Player: React.FC<PlayerProps> = ({ url }): JSX.Element => {
  console.log(url);
  return (
    <div className="playerDiv">
      <video className="video" playsInline autoPlay muted>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export default Player;
