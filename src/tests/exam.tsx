import React from 'react';

interface ExamProps {
  name?: string;
}

const Exam: React.FC<ExamProps> = (props) => {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
};

export default Exam;
