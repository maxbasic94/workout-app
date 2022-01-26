import { deleteDoc, doc } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { dataBase } from '../../firebase/firebase';
import { uploadDataToFirestore } from '../../helpers/uploadDataToFirestore';
import AdminExercisesList from '../../pages/adminPage/components/adminExerciseList/AdminExerciseList';
import { Workout } from '../../types/types';
import BaseModal from '../baseComponents/baseModal/BaseModal';
import './AdminModal.css';

interface AdminModalProps {
  setIsDelete?: (value: boolean) => void;
  workoutArray: Array<Workout>;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  exerciseListArr: Array<Workout>;
  workoutName: string;
  workoutList: Array<Workout>;
  setExerciseWorkoutArray?: (exerciseCollectionsArray: Array<Workout>) => void;
}

const AdminModal: React.FC<AdminModalProps> = ({
  open,
  onClose,
  exerciseListArr,
  workoutName,
  workoutList,
  setExerciseWorkoutArray,
  workoutArray,
  setIsDelete,
}) => {
  const currentWorkout = () => {
    let result;
    workoutList.forEach((item) => {
      if (item.title === workoutName) {
        result = item.exercises;
      }
    });
    return result;
  };

  const updateWorkout = async () => {
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

  return (
    <BaseModal open={open} onClose={onClose}>
      <>
        <div className="Modal_WorkoutName">{workoutName}</div>
        <AdminExercisesList
          setExerciseWorkoutArray={setExerciseWorkoutArray}
          isModal={true}
          exerciseListArr={exerciseListArr}
          checkedExerciseList={currentWorkout()}
        />
        <div className="Modal-UpdateButtonContainer">
          <button className="Modal-Button_UpdateWorkout" onClick={updateWorkout}>
            Update
          </button>
        </div>
      </>
    </BaseModal>
  );
};

export default AdminModal;
