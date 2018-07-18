import React from 'react';
import Question from './Question';

function TriviaList(props) {
  return (
    <ul>
      {props.questions.slice(0, props.listLimit).map((q, i) => {
        return <Question key={i} question={q} />;
      })}
    </ul>
  );
}

export default TriviaList;
