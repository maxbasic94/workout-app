import React, { useEffect, useState } from 'react';
import { DataType } from '../../types/types';
import ExerciseView from '../exerciseView/ExerciseView';

const ExercisesList: React.FunctionComponent = (): JSX.Element => {
  const [result, setResult] = useState<DataType | null>(null);
  const apiPath: string = process.env.REACT_APP_API_PATH || '';
  useEffect(() => {
    fetch(`${apiPath}`)
      .then((res) => res.json())
      .then((data) => setResult(data.data));
  }, [apiPath]);

  return (
    <div className="exersisesList">
      {result?.questions.map((item, index) => (
        <ExerciseView exrList={item} key={index} />
      ))}
    </div>
  );
};

export default ExercisesList;
