import React, { useState } from 'react';
import { Workout } from '../../../../types/types';
import AdminExerciseView from '../adminExerciseView/AdminExerciseView';

interface AdminExercisesListProps {
  exerciseListArr: Workout[];
  setExerciseWorkoutArray?: (exerciseCollectionsArray: Array<Workout>) => void;
  isModal: boolean;
}

const AdminExercisesList: React.FC<AdminExercisesListProps> = ({
  exerciseListArr: exerciseListArr,
  setExerciseWorkoutArray,
  isModal,
}): JSX.Element => {
  const [workoutArray, setWorkoutArray] = useState<Array<Workout>>([]);
  const setExerciseViewToWorkoutArray = (exerciseViewObject: Workout) => {
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
    if (setExerciseWorkoutArray) {
      setExerciseWorkoutArray(workoutArray);
    }
  };

  return (
    <div className={`${isModal ? 'Modal' : 'AdminPage'}-AdminExercisesList`}>
      {exerciseListArr?.map((item) => (
        <AdminExerciseView
          isModal={isModal}
          exerciseList={item}
          key={item.title}
          setExerciseViewToWorkoutArray={setExerciseViewToWorkoutArray}
        />
      ))}
    </div>
  );
};

export default AdminExercisesList;
