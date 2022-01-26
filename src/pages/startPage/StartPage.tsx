import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Workout, ExerciseList } from '../../types/types';
import StartInfo from './components/startInfo/StartInfo';
import ExercisesList from './components/exercisesList/ExercisesList';
import './StartPage.css';
import { dataBase } from '../../firebase/firebase';
import { query, collection, onSnapshot, doc } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import UserContext from '../../context/UserContext';

interface ExerciseProps {
  workoutName?: string;
  setExerciseArray: Dispatch<SetStateAction<ExerciseList[]>>;
}

const StartPage: React.FC<ExerciseProps> = ({ workoutName, setExerciseArray }): JSX.Element => {
  const [exerciseArr, setExerciseArr] = useState<Workout[]>([]);
  const { userData, logOut } = useContext(UserContext);
  const getAllExerciseArray = (allExerciseArray: Array<Workout> | undefined) => {
    const resultArr: Array<ExerciseList> = [];
    allExerciseArray?.forEach((item: Workout) => {
      item.exercises.forEach((exr: ExerciseList) => {
        resultArr.push(exr);
      });
    });
    return resultArr;
  };

  useEffect(() => {
    if (workoutName) {
      const workoutCollection = collection(dataBase, `workout`);
      onSnapshot(doc(workoutCollection, `${workoutName}`), (querySnapshot) => {
        const workoutArray: Array<Workout> = [];
        querySnapshot.data()?.collection.forEach((item: string) => {
          const exercisesArray: Array<ExerciseList> = [];
          const exerciseViewCollection = query(
            collection(dataBase, `workout`, `${workoutName}`, `${item}`)
          );
          onSnapshot(exerciseViewCollection, (querySnapshot) => {
            querySnapshot.forEach((item) => {
              exercisesArray.push(item.data() as ExerciseList);
            });
            const exerciseViewObject = {
              title: item,
              exercises: exercisesArray,
            };
            exerciseViewObject.title === 'Warm up'
              ? workoutArray.unshift(exerciseViewObject)
              : workoutArray.push(exerciseViewObject);
            const allExerciseArray = getAllExerciseArray(workoutArray);
            setExerciseArray(allExerciseArray);
            setExerciseArr(workoutArray);
          });
        });
      });
    }
  }, [workoutName, setExerciseArray]);

  return (
    <div className="StartPage">
      <button className="UserPage-Button_logOut" onClick={logOut}>
        Log out from {userData.email}
      </button>
      {exerciseArr.length ? (
        <>
          <StartInfo />
          <ExercisesList exerciseListArr={exerciseArr} />
        </>
      ) : (
        <Loader color="#aa00ff" />
      )}
    </div>
  );
};

export default StartPage;
