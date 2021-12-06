import React, { useEffect, useState } from 'react';
import { DataType } from '../../types/types';

const ExersisesList: React.FunctionComponent = (): JSX.Element => {
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
        <div key={ind}>{q.title}</div>
      ))}
    </div>
  );
};

export default ExersisesList;
