import { useEffect, useState } from 'react';
import { Workout, ExerciseList } from '../types/types';
import { dataBase } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface UseFetchFirebaseDataResult {
  workoutList: Array<Workout>;
  setIsDelete: (value: boolean) => void;
}

const useFetchFirebaseData = (): UseFetchFirebaseDataResult => {
  const [workoutList, setWorkoutList] = useState<Array<Workout>>([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    const exerciseDocs = getDocs(collection(dataBase, 'workout'));
    const exercisesList: Array<{ title: string; collection: Array<string> }> = [];
    const workoutArray: Array<Workout> = [];
    exerciseDocs
      .then((exerciseDocs) => {
        exerciseDocs.forEach((exerciseDoc) => {
          const exerciseViewCollectionsName: Array<string> = [];
          exerciseDoc.data().collection.forEach((item: string) => {
            exerciseViewCollectionsName.push(item);
          });
          const exerciseViewCollection = {
            title: exerciseDoc.data().title,
            collection: exerciseViewCollectionsName,
          };
          exercisesList.push(exerciseViewCollection);
        });
      })
      .then(() => {
        exercisesList.forEach((item) => {
          item.collection.forEach((exerciseViewCollectionName) => {
            const exercisesArray: Array<ExerciseList> = [];
            getDocs(
              collection(dataBase, `workout`, `${item.title}`, `${exerciseViewCollectionName}`)
            )
              .then((exerciseViewDocs) => {
                exerciseViewDocs.forEach((item) => {
                  exercisesArray.push(item.data() as ExerciseList);
                });
                workoutArray.push({ title: item.title, exercises: exercisesArray });
              })
              .then(() => {
                setIsDelete(false);
                workoutArray.forEach((item) => {
                  item.exercises.length > 0;
                });
              })
              .then(() => {
                workoutArray.length === exercisesList.length && setWorkoutList(workoutArray);
              });
          });
        });
      });
  }, [isDelete]);

  return { workoutList, setIsDelete };
};

export default useFetchFirebaseData;

// import { useEffect, useState } from 'react';
// import { Workout, ExerciseList } from '../types/types';
// import { dataBase } from '../firebase/firebase';
// import { collection, query, onSnapshot } from 'firebase/firestore';

// const useFetchFirebaseData = (): Array<Workout> => {
//   const [workoutList, setWorkoutList] = useState<Array<string>>([]);
//   const [exercisesMap, setExercisesMap] = useState<Record<string, ExerciseList[]>>({});

//   useEffect(() => {
//     const exerciseViewCollection = query(collection(dataBase, 'workout'));
//     onSnapshot(exerciseViewCollection, (querySnapshot) => {
//       const workoutArray: string[] = [];
//       querySnapshot.forEach((exerciseViewItem) => {
//         const exercisesArray: Array<ExerciseList> = [];
//         const title = exerciseViewItem.data().title;

//         exerciseViewItem.data().collection.forEach(async (item: string) => {
//           const exerciseViewCollection = query(
//             collection(dataBase, `workout`, exerciseViewItem.data().title, `${item}`)
//           );
//           onSnapshot(exerciseViewCollection, (snapshot) => {
//             snapshot.forEach((item) => {
//               exercisesArray.push(item.data() as ExerciseList);
//             });

//             setExercisesMap((previousValue) => ({
//               ...previousValue,
//               [title]: (previousValue[title] || []).concat(exercisesArray),
//             }));
//           });
//         });

//         workoutArray.push(title);
//       });

//       setWorkoutList(workoutArray);
//     });
//   }, []);

//   return workoutList.map((workoutItem) => ({
//     title: workoutItem,
//     exercises: exercisesMap[workoutItem] || [],
//   }));
// };

// export default useFetchFirebaseData;
