export type ExerciseList = {
  description: string;
  duration: number;
  id: number;
  photo: string;
  title: string;
  video: string;
};

export type Workout = {
  title: string;
  exercises: Array<ExerciseList>;
};
