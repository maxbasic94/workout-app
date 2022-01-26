import React, { Dispatch, SetStateAction, useContext } from 'react';
import { ExerciseList } from '../../types/types';
import StartInfo from './components/startInfo/StartInfo';
import ExercisesList from './components/exercisesList/ExercisesList';
import './StartPage.css';
import Loader from '../../components/loader/Loader';
import UserContext from '../../context/UserContext';
import useStartPageData from '../../hooks/useStartPageData.hook';

interface ExerciseProps {
  workoutName: string;
  setExerciseArray: Dispatch<SetStateAction<ExerciseList[]>>;
}

const StartPage: React.FC<ExerciseProps> = ({ workoutName, setExerciseArray }): JSX.Element => {
  const { userData, logOut } = useContext(UserContext);
  const { exerciseArr } = useStartPageData(workoutName, setExerciseArray);

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
