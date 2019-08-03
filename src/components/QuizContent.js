import React from 'react';
import { connect } from 'react-redux'
import QuizDetails from './QuizDetails'
import { incrementSet } from '../actions/quiz'
import { questions, oppositeQuestions } from '../texts/content'

const QuizContent = ({ match, incrementSet, setToRender }) => {
  console.log(setToRender)
  const questionsPerPage = 1


  const renderQuestions = (questions, questionsPerPage, setToRender) => {
    switch (setToRender) {
      case 1:
        return questions.slice(0, questionsPerPage).map((question) => <QuizDetails key={question} question={question} match={match} />)
      case 2:
        return questions.slice(questionsPerPage).map((question) => <QuizDetails key={question} question={question} match={match} />)
    }
  }

  const handleNextButton = () => {
    incrementSet()
  }

  return (
    <div>
      <h2>Quiz content</h2>
      {renderQuestions(questions, questionsPerPage, setToRender)}
      <button onClick={handleNextButton}>NEXT</button>
    </div>
  )
}

const mapStateToProps = ({ setToRender }) => {
  return {
    setToRender
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementSet: () => dispatch(incrementSet())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizContent)
