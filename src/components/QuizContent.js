import React from 'react';
import { connect } from 'react-redux'
import QuizDetails from './QuizDetails'
import { NavLink } from 'react-router-dom'
import { incrementSet } from '../actions/quiz'
import { questions, oppositeQuestions } from '../texts/content'

const QuizContent = ({ answeredCount, currentSet, incrementSet }) => {
  const quizPageParameters = {
    answeredCount,
    arrayWithQuestionsNumber: 2,
    currentSet,
    maxQuestionsNumber: questions.length + oppositeQuestions.length,
    maxSetsNumber() { return Math.ceil(this.maxQuestionsNumber / (this.questionsPerPage * this.arrayWithQuestionsNumber)) },
    questionsPerPage: 3
  }

  const renderQuestions = (questions, isOpposite, { currentSet, questionsPerPage, }) => {

    return questions.slice(questionsPerPage * (currentSet - 1), questionsPerPage * (currentSet)).map((question) => <QuizDetails key={question} question={question} isOpposite={isOpposite} />)
  }

  const handleNextButton = ({ answeredCount, arrayWithQuestionsNumber, currentSet, questionsPerPage }) => {
    if (answeredCount === questionsPerPage * currentSet * arrayWithQuestionsNumber) {
      incrementSet()
    }

  }
  const handleResultsButton = (e, { answeredCount, maxQuestionsNumber }) => {
    if (answeredCount !== maxQuestionsNumber) {
      e.preventDefault()
    }
  }

  return (
    <div>
      <h2>Quiz content</h2>
      {renderQuestions(questions, false, { ...quizPageParameters })}
      {renderQuestions(oppositeQuestions, true, { ...quizPageParameters })}

      {currentSet < quizPageParameters.maxSetsNumber() ?
        <button onClick={() => handleNextButton(quizPageParameters)}>Next</button> :
        <NavLink to="/results" onClick={(e) => handleResultsButton(e, quizPageParameters)}>RESULTS</NavLink>
      }

    </div>
  )
}

const mapStateToProps = ({ answeredCount, currentSet }) => {
  return {
    answeredCount,
    currentSet
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementSet: () => dispatch(incrementSet()),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizContent)
