import ReactDom from 'react-dom';
import AdminExercisesList from '../../pages/adminPage/components/adminExerciseList/AdminExerciseList';
import { Workout } from '../../types/types';
import './Modal.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  exerciseListArr: Array<Workout>;
  workoutName: string;
  workoutList: Array<Workout>;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  exerciseListArr,
  workoutName,
  workoutList,
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

  const UpdateWorkout = () => {
    console.log('Update workout button');
  };

  console.log(exerciseListArr, currentWorkout());

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
        <AdminExercisesList isModal={true} exerciseListArr={exerciseListArr} />
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
