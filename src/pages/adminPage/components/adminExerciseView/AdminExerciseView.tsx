import React, { useEffect, useState } from 'react';
import { Workout, ExerciseList } from '../../../../types/types';
import AdminExercise from '../adminExercise/AdminExercise';
import './AdminExerciseView.css';

interface AdminExerciseViewProps {
  exerciseList: Workout;
  setExerciseViewToWorkoutArray: (exerciseViewObject: Workout) => void;
}

const AdminExerciseView: React.FunctionComponent<AdminExerciseViewProps> = ({
  exerciseList,
  setExerciseViewToWorkoutArray,
}) => {
  const [exerciseArray, setExerciseArray] = useState<Array<ExerciseList>>([]);
  const [exerciseViewObject, setExerciseViewObject] = useState<Workout>({
    title: `${exerciseList.title}`,
    exercises: [],
  });
  function setIdToArray(exercise: ExerciseList) {
    setExerciseArray((oldValue) => [...oldValue, exercise]);
    setExerciseViewToWorkoutArray(exerciseViewObject);
  }
  function removeIdToArray(id: number) {
    const newExerciseArray = exerciseArray.filter((item) => item.id !== id);
    setExerciseArray(newExerciseArray);
    setExerciseViewToWorkoutArray(exerciseViewObject);
  }
  useEffect(() => {
    const newExerciseViewObject = exerciseViewObject;
    newExerciseViewObject.exercises = exerciseArray;
    setExerciseViewObject(newExerciseViewObject);
  }, [exerciseArray, exerciseViewObject]);
  return (
    <div className="AdminPage-AdminExerciseView">
      <div className="AdminPage-AdminExerciseView_exrCaption">{exerciseList.title}</div>
      {exerciseList.exercises.map((item) => (
        <AdminExercise
          exercise={item}
          key={item.id}
          setIdToArray={setIdToArray}
          removeIdToArray={removeIdToArray}
        />
      ))}
      <hr />
    </div>
  );
};

export default AdminExerciseView;
