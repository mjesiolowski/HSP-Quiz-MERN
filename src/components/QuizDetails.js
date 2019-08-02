import React from 'react';

const QuizDetails = () => {
  const questions = ['Violence and cruelty affect me deeply.', 'I easily absorb other people’s feelings.']

  const renderQuestions = (questions) => questions.map((question) => (
    <div key={question}>
      <p>{question}</p>
      <div>
        <p>Agree</p>
        <div>
          <div>O</div>
          <div>O</div>
          <div>O</div>
          <div>O</div>
          <div>O</div>
        </div>
        <p>Disagree</p>
      </div>
    </div>
  ))

  return (
    <>
      <p>Test</p>
      {renderQuestions(questions)}
    </>
  )
}

export default QuizDetails;
