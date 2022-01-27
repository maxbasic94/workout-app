import { Dispatch, SetStateAction } from 'react';
import updateWorkout from '../../../../helpers/updateWorkout';
import AdminExercisesList from '../adminExerciseList/AdminExerciseList';
import { Workout } from '../../../../types/types';
import BaseModal from '../../../../components/baseModal/BaseModal';
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
  const handlerClick = () => {
    setIsDelete && updateWorkout(setIsDelete, workoutName, workoutArray);
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
          <button className="Modal-Button_UpdateWorkout" onClick={() => handlerClick()}>
            Update
          </button>
        </div>
      </>
    </BaseModal>
  );
};

export default AdminModal;
