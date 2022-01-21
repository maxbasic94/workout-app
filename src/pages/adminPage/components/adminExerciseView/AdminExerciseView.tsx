import React, { useEffect, useState } from 'react';
import { Workout, ExerciseList } from '../../../../types/types';
import AdminExercise from '../adminExercise/AdminExercise';
import './AdminExerciseView.css';

interface AdminExerciseViewProps {
  exerciseList: Workout;
  setExerciseViewToWorkoutArray: (exerciseViewObject: Workout) => void;
  isModal: boolean;
  checkedExerciseList?: Array<ExerciseList>;
}

const AdminExerciseView: React.FunctionComponent<AdminExerciseViewProps> = ({
  exerciseList,
  setExerciseViewToWorkoutArray,
  isModal,
  checkedExerciseList,
}) => {
  const [exerciseArray, setExerciseArray] = useState<Array<ExerciseList>>([]);
  const [exerciseViewObject, setExerciseViewObject] = useState<Workout>({
    title: `${exerciseList.title}`,
    exercises: [],
  });
  const setIdToArray = (exercise: ExerciseList) => {
    setExerciseArray((oldValue) => [...oldValue, exercise]);
    setExerciseViewToWorkoutArray(exerciseViewObject);
  };
  const removeIdToArray = (id: number) => {
    const newExerciseArray = exerciseArray.filter((item) => item.id !== id);
    setExerciseArray(newExerciseArray);
    setExerciseViewToWorkoutArray(exerciseViewObject);
  };
  useEffect(() => {
    const newExerciseViewObject = exerciseViewObject;
    newExerciseViewObject.exercises = exerciseArray;
    setExerciseViewObject(newExerciseViewObject);
  }, [exerciseArray, exerciseViewObject]);

  return (
    <div className={`${isModal ? 'Modal' : 'AdminPage'}-AdminExerciseView`}>
      <div className={`${isModal ? 'Modal' : 'AdminPage'}-AdminExerciseView_exrCaption`}>
        {exerciseList.title}
      </div>
      {exerciseList.exercises.map((item) => (
        <AdminExercise
          isModal={isModal}
          exercise={item}
          key={item.id}
          setIdToArray={setIdToArray}
          removeIdToArray={removeIdToArray}
          checkedExerciseList={checkedExerciseList}
        />
      ))}
      <hr />
    </div>
  );
};

export default AdminExerciseView;
