import React, { useState } from 'react';
import { Workout } from '../../../../types/types';
import AdminExerciseView from '../adminExerciseView/AdminExerciseView';

interface AdminExercisesListProps {
  exerciseListArr: Workout[];
}

const AdminExercisesList: React.FC<AdminExercisesListProps> = ({
  exerciseListArr: exerciseListArr,
}): JSX.Element => {
  const [workoutArray, setWorkoutArray] = useState<Array<Workout>>([]);

  function setExerciseViewToWorkoutArray(exerciseViewObject: Workout) {
    const result = workoutArray;
    if (workoutArray.length === 0) {
      result.push(exerciseViewObject);
    } else {
      let elementFount = false;
      workoutArray.forEach((item, index) => {
        if (item.title === exerciseViewObject.title) {
          result[index] = exerciseViewObject;
          elementFount = true;
        }
      });
      if (!elementFount) {
        exerciseViewObject.title === 'Warm up'
          ? workoutArray.unshift(exerciseViewObject)
          : workoutArray.push(exerciseViewObject);
      }
    }
    setWorkoutArray(result);
    console.log(workoutArray);
  }

  return (
    <div className="AdminPage-AdminExercisesList">
      {exerciseListArr?.map((item) => (
        <AdminExerciseView
          exerciseList={item}
          key={item.title}
          setExerciseViewToWorkoutArray={setExerciseViewToWorkoutArray}
        />
      ))}
    </div>
  );
};

export default AdminExercisesList;
