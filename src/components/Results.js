import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { questions, oppositeQuestions } from '../texts/content'
import axios from 'axios'

const Results = ({ points, singleQuestionHighestScore }) => {

  const resultSettings = {
    maxQuestionsNumber: questions.length + oppositeQuestions.length,
    points,
    singleQuestionHighestScore,
  }
  const setResult = ({ maxQuestionsNumber, points, singleQuestionHighestScore }) => points / (maxQuestionsNumber * singleQuestionHighestScore) * 100

  const result = (setResult(resultSettings))

  const renderResults = (result) => {

    console.log(result)
    if (result >= 60) {
      return 'There is a quite high chance that you are one of highly sensitive persons. Being highly sensitive is a normal trait. Approximately 15 to 20 percent of the population has the gene that makes them highly sensitive. Now that you got this knowledge, I encourage you to dive deeper into HSP’s traits as it is essential for your personal growth.'
    } else if (result < 60 && result >= 30) {
      return 'Although you share some traits with highly sensitive persons, you seem not to be one them. Since approximately 15 to 20 percent of the population has the gene that makes them highly sensitive, I strongly encourage you to look into the FAQ section, as it may enrich your knowledge about HSP making it easier to communicate with them.'
    } else return 'According to the score, you do not share many HSP’s traits. Since approximately 15 to 20 percent of the population has the gene that makes them highly sensitive, I strongly encourage you to look into the FAQ section, as it may enrich your knowledge about HSP making it easier to communicate with them.'
  }

  useEffect(() => {
    axios.post('http://localhost:3000/stats/', {
      gender: "M",
      age: 30,
      result,
    })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e))
  }, [])



  return (
    <p>{renderResults(result)}</p>
  )
}

const mapStateToProps = ({ points, singleQuestionHighestScore }) => ({
  points,
  singleQuestionHighestScore
})

export default connect(mapStateToProps)(Results)
