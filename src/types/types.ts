export type ExersiceType = {
  description: string;
  duration: number;
  id: number;
  photo: string;
  title: string;
  video: string;
};

export type QuestionType = {
  title: string;
  exercises: Array<ExersiceType>;
};

export type DataType = {
  questions: QuestionType[];
  name: string;
  slug: string;
};
