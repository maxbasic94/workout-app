import { doc, setDoc } from 'firebase/firestore';
import { dataBase } from '../firebase/firebase';
import { Workout } from '../types/types';

const removeEmptyArray = (currentArray: Array<Workout>) => {
  const resultArray = currentArray;
  currentArray.forEach((item, index) => {
    if (item.exercises.length === 0) {
      resultArray.splice(index, 1);
    }
  });
  return resultArray;
};

const uploadDataToFirestore = async (workoutArray: Array<Workout>, workoutNameInput: string) => {
  try {
    const setArray = removeEmptyArray(workoutArray);
    const collectionArray: Array<string> = [];
    if (workoutNameInput && workoutArray.length > 0) {
      setArray.forEach(async (item) => {
        collectionArray.push(`${item.title}`);
        const workoutDoc = doc(dataBase, `workout`, `${workoutNameInput}`);
        await setDoc(workoutDoc, { title: workoutNameInput, collection: collectionArray });
        item.exercises.forEach(async (elem) => {
          await setDoc(
            doc(workoutDoc, `${item.title}`, `exercise${elem.id}`),
            {
              id: elem.id,
              duration: elem.duration,
              description: elem.description,
              photo: elem.photo,
              title: elem.title,
              video: elem.video,
            },
            { merge: true }
          );
        });
      });
    } else {
      throw new Error(`empty workout's name or exercise list!`);
    }
  } catch (error) {
    alert(error);
  }
};

export { uploadDataToFirestore, removeEmptyArray };
