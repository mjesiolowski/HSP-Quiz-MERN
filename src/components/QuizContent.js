import React from 'react';
import QuizDetails from './QuizDetails'

const QuizContent = () => {
  const questions = ['Violence and cruelty affect me deeply.', 'I easily absorb other people’s feelings.']
  const oppositeQuestions = ['I love spending hours out, I cannot get enough being among other people.', 'I can easily adopt to changes, routines make me get bored easily.']

  const renderQuestions = (questions) => questions.map((question) => <QuizDetails key={question} question={question} />)
  const renderOppositeQuestions = (questions) => oppositeQuestions.map((question) => <QuizDetails key={question} question={question} opposite={true} />)


  return (
    <div>
      <h2>Quiz content</h2>
      {renderQuestions(questions)}
      {renderOppositeQuestions(oppositeQuestions)}
      <button>NEXT</button>
    </div>
  )
}

export default QuizContent;
