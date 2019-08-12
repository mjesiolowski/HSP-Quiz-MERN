import React, { useEffect, useState } from 'react';
import Statistics from './Statistics'
import { connect } from 'react-redux'
import { questions, oppositeQuestions } from '../texts/content'
import axios from 'axios'

const Results = ({ age, gender, isHSPScore, points, singleQuestionHighestScore }) => {

  const [isDataPosted, setIsDataPosted] = useState(false)

  const resultSettings = {
    maxQuestionsNumber: questions.length + oppositeQuestions.length,
    points,
    singleQuestionHighestScore,
  }
  const setResult = ({ maxQuestionsNumber, points, singleQuestionHighestScore }) => Math.round(points / (maxQuestionsNumber * singleQuestionHighestScore) * 100)

  const result = (setResult(resultSettings))

  const renderResults = (result, isHSPScore) => {

    console.log(result)
    if (result >= isHSPScore) {
      return 'There is a quite high chance that you are one of highly sensitive persons. Being highly sensitive is a normal trait. Approximately 15 to 20 percent of the population has the gene that makes them highly sensitive. Now that you got this knowledge, I encourage you to dive deeper into HSP’s traits as it is essential for your personal growth.'
    } else if (result < isHSPScore && result >= isHSPScore - (isHSPScore / 3)) {
      return 'Although you share some traits with highly sensitive persons, you seem not to be one them. Since approximately 15 to 20 percent of the population has the gene that makes them highly sensitive, I strongly encourage you to look into the FAQ section, as it may enrich your knowledge about HSP making it easier to communicate with them.'
    } else return 'According to your score, you do not share many HSP’s traits. Since approximately 15 to 20 percent of the population has the gene that makes them highly sensitive, I strongly encourage you to look into the FAQ section, as it may enrich your knowledge about HSP making it easier to communicate with them.'
  }

  useEffect(() => {
    axios.post('http://localhost:3000/stats/', {
      gender,
      age,
      result,
    })
      .then((res) => {
        setIsDataPosted(true)
      })
      .catch((e) => {
        setIsDataPosted(false)
      })
  }, [])



  return (
    <div className="results">
      <h2 className="title">Your result: <strong>{result}%</strong></h2>
      <p className="text">{renderResults(result, isHSPScore)}</p>
      {isDataPosted ? <Statistics /> : <p className="text">Saving results...</p>}
    </div>

  )
}

const mapStateToProps = ({ quizReducer, userReducer }) => {

  const { isHSPScore, points, singleQuestionHighestScore } = quizReducer
  const { age, gender } = userReducer

  return ({
    age,
    gender,
    isHSPScore,
    points,
    singleQuestionHighestScore
  })
}
export default connect(mapStateToProps)(Results)
