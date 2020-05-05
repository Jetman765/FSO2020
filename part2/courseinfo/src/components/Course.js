import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  const { name, parts } = course;
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <p>total of {total} exercises</p>
    </div>
  );
}

export default Course;