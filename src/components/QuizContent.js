import React from 'react';
import { connect } from 'react-redux'
import QuizDetails from './QuizDetails'
import { incrementSet } from '../actions/quiz'
import { questions, oppositeQuestions } from '../texts/content'

const QuizContent = ({ answersNumber, currentSet, incrementSet }) => {
  const questionsPerPage = 3 //each array of questions
  const arrayWithQuestionsNumber = 2
  const quizPageParameters = {
    answersNumber,
    currentSet,
    // maxQuestionsNumber: questions.length + oppositeQuestions.length,
    maxQuestionsNumber: questions.length,
    maxSetsNumber: Math.ceil(questions.length / questionsPerPage),
    questionsPerPage,
  }


  const renderQuestions = (questions, isOpposite, { questionsPerPage, currentSet }) => {
    switch (currentSet) {
      case 1:
        return questions.slice(0, questionsPerPage).map((question) => <QuizDetails key={question} question={question} isOpposite={isOpposite} />)
      case 2:
        return questions.slice(questionsPerPage, questionsPerPage * 2).map((question) => <QuizDetails key={question} question={question} isOpposite={isOpposite} />)
      case 3:
        return questions.slice(questionsPerPage * 2, questionsPerPage * 3).map((question) => <QuizDetails key={question} question={question} isOpposite={isOpposite} />)
      case 4:
        return questions.slice(questionsPerPage * 3, questionsPerPage * 4).map((question) => <QuizDetails key={question} question={question} isOpposite={isOpposite} />)
    }
  }

  const handleNextButton = ({ answersNumber, maxSetsNumber, maxQuestionsNumber, currentSet, questionsPerPage }) => {
    console.log(answersNumber, maxQuestionsNumber)

    // if (answers === questionsPerPage * arrayWithQuestionsNumber * currentSet) {
    if (answersNumber === questionsPerPage * currentSet && answersNumber !== maxQuestionsNumber) {
      return incrementSet()
    }

    if (answersNumber === maxQuestionsNumber) {
      return console.log('Redirect')
    }

  }

  return (
    <div>
      <h2>Quiz content</h2>
      {renderQuestions(questions, false, { ...quizPageParameters })}
      {/* {renderQuestions(oppositeQuestions, true, { ...quizPageParameters })} */}
      <button onClick={() => handleNextButton(quizPageParameters)}>{quizPageParameters.currentSet === quizPageParameters.maxSetsNumber ? 'RESULTS' : 'NEXT'}</button>

    </div>
  )
}

const mapStateToProps = ({ answersNumber, currentSet }) => {
  return {
    answersNumber,
    currentSet
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementSet: () => dispatch(incrementSet())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizContent)
