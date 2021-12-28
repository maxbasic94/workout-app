export type ExerciseType = {
  description: string;
  duration: number;
  id: number;
  photo: string;
  title: string;
  video: string;
};

export type QuestionType = {
  title: string;
  exercises: Array<ExerciseType>;
};

export type DataType = {
  questions: QuestionType[];
  name: string;
  slug: string;
};
