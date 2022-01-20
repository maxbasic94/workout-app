import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { dataBase } from '../../../../firebase/firebase';
import './CompletedWorkout.css';

const CompletedWorkout: React.FC = (): JSX.Element => {
  const [completedWorkoutList, setCompletedWorkoutList] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const completedWorkoutDoc = doc(dataBase, `users`, `${auth.currentUser?.uid}`);
    onSnapshot(completedWorkoutDoc, (snapshot) => {
      setCompletedWorkoutList(snapshot.data()?.performed);
    });
  }, [auth.currentUser?.uid]);

  return (
    <div className="UserPage-CompletedWorkout">
      <h4 className="UserPage-CompletedWorkout_caption">Completed workouts</h4>
      {completedWorkoutList.map(({ name, time }, index) => (
        <div className="UserPage-CompletedWorkout_dataContainer" key={`${index}_${name}`}>
          <div className="UserPage-CompletedWorkout_name">name: {name}</div>
          <div className="UserPage-CompletedWorkout_time">time: {time}</div>
        </div>
      ))}
    </div>
  );
};

export default CompletedWorkout;
