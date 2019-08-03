import React from 'react';
import { connect } from 'react-redux'
import QuizDetails from './QuizDetails'
import { incrementSet } from '../actions/quiz'
import { questions, oppositeQuestions } from '../texts/content'

const QuizContent = ({ answers, match, incrementSet, setToRender }) => {
  // console.log(setToRender)
  const questionsPerPage = 2
  const quizPageParameters = {
    questionsPerPage,
    setToRender,
    answers,
    maxSetsNumber: Math.ceil(questions.length / questionsPerPage)
  }


  const renderQuestions = (questions, questionsPerPage, setToRender) => {
    switch (setToRender) {
      case 1:
        return questions.slice(0, questionsPerPage).map((question) => <QuizDetails key={question} question={question} match={match} />)
      case 2:
        return questions.slice(questionsPerPage).map((question) => <QuizDetails key={question} question={question} match={match} />)
    }
  }

  const handleNextButton = ({ answers, maxSetsNumber, setToRender, questionsPerPage }) => {
    if (setToRender >= maxSetsNumber) {
      return console.log('Redirect')
    }
    if (answers === questionsPerPage * setToRender) {
      return incrementSet()
    }
  }

  return (
    <div>
      <h2>Quiz content</h2>
      {renderQuestions(questions, questionsPerPage, setToRender)}
      <button onClick={() => handleNextButton(quizPageParameters)}>NEXT</button>
    </div>
  )
}

const mapStateToProps = ({ answers, setToRender }) => {
  return {
    answers,
    setToRender
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementSet: () => dispatch(incrementSet())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizContent)
