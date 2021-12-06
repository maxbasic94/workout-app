import React from 'react';
import './StartInfo.css';

const StartInfo: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="startInfo">
      <div className="day">Day1</div>
      <div className="caption">Morning Flexibility Routine</div>
      <div className="levelInfo">Easy • 15 min • No equipment</div>
      <hr />
    </div>
  );
};

export default StartInfo;
