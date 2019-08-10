import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import QuizDetails from './QuizDetails'
import { NavLink } from 'react-router-dom'
import { incrementSet } from '../actions/quiz'
import { questions, oppositeQuestions } from '../texts/content'

const QuizContent = ({ answeredCount, currentSet, incrementSet }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentSet])

  useEffect(() => {
    const progressBar = document.querySelector('.quiz__progress-bar-filler')

    progressBar.style.width = (answeredCount / (questions.length + oppositeQuestions.length) * 100) + '%'
  }, [answeredCount])

  const quizPageParameters = {
    answeredCount,
    answeredPercentage: answeredCount / (questions.length + oppositeQuestions.length) * 100,
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
    <div className="quiz">
      <div className="quiz__content">
        <div className="quiz__progress-bar">
          <div className="quiz__progress-bar-filler"></div>
          <p className="quiz__progress-bar-percentage">{quizPageParameters.answeredPercentage}%</p>
        </div>
        {renderQuestions(questions, false, { ...quizPageParameters })}
        {renderQuestions(oppositeQuestions, true, { ...quizPageParameters })}

        <div className="buttons">
          {currentSet < quizPageParameters.maxSetsNumber() ?
            <button
              className='button link quiz__button'
              onClick={() => handleNextButton(quizPageParameters)}
            >Next</button> :
            <NavLink
              className='button link quiz__button'
              to="/results"
              onClick={(e) => handleResultsButton(e, quizPageParameters)}
            >RESULTS</NavLink>
          }
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = ({ quizReducer }) => {
  const { answeredCount, currentSet } = quizReducer
  return {
    answeredCount,
    currentSet
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementSet: () => dispatch(incrementSet()),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizContent)
