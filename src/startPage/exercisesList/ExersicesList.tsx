import React, { useEffect, useState } from 'react';
import { DataType } from '../../types/types';
import ExerciseView from '../exerciseView/ExerciseView';

const ExercisesList: React.FunctionComponent = (): JSX.Element => {
  const [result, setResult] = useState<DataType | null>(null);

  useEffect(() => {
    fetch(
      'https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2'
    )
      .then((res) => res.json())
      .then((data) => setResult(data.data));
  }, []);

  return (
    <div className="exersisesList">
      {result?.questions.map((q, ind) => (
        <ExerciseView q={q} key={ind} />
      ))}
    </div>
  );
};

export default ExercisesList;
