import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPoints, addAnswer } from '../actions/quiz'

const QuizDetails = ({ addAnswer, addPoints, isOpposite, singleQuestionHighestScore, question }) => {
  const [isAnswered, setIsAnswered] = useState(false)
  const [pointsState, setPoints] = useState(0)
  console.log(singleQuestionHighestScore)
  const handleClick = (e) => {
    const points = parseInt(e.target.attributes.count.value, 10)
    if (!isAnswered) {
      addPoints(points)
      setIsAnswered(true)
      addAnswer()
    } else {
      addPoints(points - pointsState)
    }
    setPoints(points)
  }

  return (
    <div>
      {!isOpposite &&
        <>
          <p>{question}</p>
          <div>
            <p>Agree</p>
            <div>
              <div count={singleQuestionHighestScore} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore - 1} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore - 2} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore - 3} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore - 4} onClick={(e) => handleClick(e)}>O</div>
            </div>
            <p>Disagree</p>
          </div>
        </>
      }

      {isOpposite &&
        <>
          <p>{question}</p>
          <div>
            <p>Agree</p>
            <div>
              <div count={singleQuestionHighestScore - 4} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore - 3} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore - 2} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore - 1} onClick={(e) => handleClick(e)}>O</div>
              <div count={singleQuestionHighestScore} onClick={(e) => handleClick(e)}>O</div>
            </div>
            <p>Disagree</p>
          </div>
        </>
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addPoints: (points) => dispatch(addPoints(points)),
  addAnswer: () => dispatch(addAnswer()),
})

const mapStateToProps = ({ singleQuestionHighestScore }) => ({
  singleQuestionHighestScore
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails)
