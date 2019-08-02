import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPoints, addAnswer } from '../actions/quiz'

const QuizDetails = ({ addAnswer, addPoints, handleAddPoints, question, opposite }) => {

  const [isAnswered, setIsAnswered] = useState(false)
  const [pointsState, setPoints] = useState(0)

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
      {!opposite &&
        <>
          <p>{question}</p>
          <div>
            <p>Agree</p>
            <div>
              <div count='4' onClick={(e) => handleClick(e)}>O</div>
              <div count='3' onClick={(e) => handleClick(e)}>O</div>
              <div count='2' onClick={(e) => handleClick(e)}>O</div>
              <div count='1' onClick={(e) => handleClick(e)}>O</div>
              <div count='0' onClick={(e) => handleClick(e)}>O</div>
            </div>
            <p>Disagree</p>
          </div>
        </>
      }

      {opposite &&
        <>
          <p>{question}</p>
          <div>
            <p>Agree</p>
            <div>
              <div count='0' onClick={(e) => handleClick(e)}>O</div>
              <div count='1' onClick={(e) => handleClick(e)}>O</div>
              <div count='2' onClick={(e) => handleClick(e)}>O</div>
              <div count='3' onClick={(e) => handleClick(e)}>O</div>
              <div count='4' onClick={(e) => handleClick(e)}>O</div>
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

export default connect(undefined, mapDispatchToProps)(QuizDetails)
