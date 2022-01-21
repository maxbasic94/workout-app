import { deleteDoc, doc } from 'firebase/firestore';
import ReactDom from 'react-dom';
import { dataBase } from '../../firebase/firebase';
import { uploadDataToFirestore } from '../../helpers/uploadDataToFirestore';
import AdminExercisesList from '../../pages/adminPage/components/adminExerciseList/AdminExerciseList';
import { Workout } from '../../types/types';
import './Modal.css';

interface ModalProps {
  setIsDelete?: (value: boolean) => void;
  workoutArray: Array<Workout>;
  open: boolean;
  onClose: () => void;
  exerciseListArr: Array<Workout>;
  workoutName: string;
  workoutList: Array<Workout>;
  setExerciseWorkoutArray?: (exerciseCollectionsArray: Array<Workout>) => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  exerciseListArr,
  workoutName,
  workoutList,
  setExerciseWorkoutArray,
  workoutArray,
  setIsDelete,
}) => {
  if (!open) {
    return null;
  }

  const currentWorkout = () => {
    let result;
    workoutList.forEach((item) => {
      if (item.title === workoutName) {
        result = item.exercises;
      }
    });
    return result;
  };

  const UpdateWorkout = async () => {
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

  return ReactDom.createPortal(
    <>
      <div className="Modal-Overlay" />
      <div className="Modal-Container">
        <div className="Modal-Div_buttonContainer">
          <button className="Modal-Button_closeModal" onClick={onClose}>
            X
          </button>
        </div>
        <div className="Modal_WorkoutName">{workoutName}</div>
        <AdminExercisesList
          setExerciseWorkoutArray={setExerciseWorkoutArray}
          isModal={true}
          exerciseListArr={exerciseListArr}
          checkedExerciseList={currentWorkout()}
        />
        <div className="Modal-UpdateButtonContainer">
          <button className="Modal-Button_UpdateWorkout" onClick={UpdateWorkout}>
            Update
          </button>
        </div>
      </div>
    </>,
    document.querySelector('#portal') as HTMLElement
  );
};

export default Modal;
