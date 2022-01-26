import { deleteDoc, doc } from 'firebase/firestore';
import { dataBase } from '../firebase/firebase';
import { Workout } from '../types/types';
import { uploadDataToFirestore } from './uploadDataToFirestore';

const updateWorkout = async (
  setIsDelete: (value: boolean) => void,
  workoutName: string,
  workoutArray: Array<Workout>
): Promise<void> => {
  deleteDoc(doc(dataBase, `workout`, `${workoutName}`))
    .then(() => {
      uploadDataToFirestore(workoutArray, workoutName);
    })
    .then(() => {
      alert(`Workout ${workoutName} updated`);
    })
    .then(() => {
      setIsDelete && setIsDelete(true);
    });
};

export default updateWorkout;
