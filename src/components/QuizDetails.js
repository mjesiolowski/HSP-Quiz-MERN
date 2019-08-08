import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPoints, addAnswer } from '../actions/quiz'

const QuizDetails = ({ addAnswer, addPoints, isOpposite, singleQuestionHighestScore, question }) => {
  const [isAnswered, setIsAnswered] = useState(false)
  const [pointsState, setPoints] = useState(0)

  const handleClick = (e) => {
    const option = e.target

    const toggleActiveCalss = (option) => {
      option.parentNode.childNodes.forEach(option => {
        option.classList.remove('active')
      })
      option.classList.add('active')
    }

    toggleActiveCalss(option)

    const points = parseInt(option.attributes.count.value, 10)
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
    <div className="quiz__section">
      {!isOpposite &&
        <>
          <p className="text">{question}</p>
          <div>
            <div className="quiz__options">
              <div className="quiz__option quiz__option--agree-max" count={singleQuestionHighestScore} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--agree-min" count={singleQuestionHighestScore - 1} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--neutral" count={singleQuestionHighestScore - 2} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--disagree-min" count={singleQuestionHighestScore - 3} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--disagree-max" count={singleQuestionHighestScore - 4} onClick={(e) => handleClick(e)}></div>
            </div>
            <div className="quiz__choice">
              <p className="quiz__agree text">Agree</p>
              <p className="quiz__disagree text">Disagree</p>
            </div>
          </div>
        </>
      }

      {isOpposite &&
        <>
          <p className="text">{question}</p>
          <div>
            <div className="quiz__options">
              <div className="quiz__option quiz__option--agree-max" count={singleQuestionHighestScore - 4} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--agree-min" count={singleQuestionHighestScore - 3} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--neutral" count={singleQuestionHighestScore - 2} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--disagree-min" count={singleQuestionHighestScore - 1} onClick={(e) => handleClick(e)}></div>
              <div className="quiz__option quiz__option--disagree-max" count={singleQuestionHighestScore} onClick={(e) => handleClick(e)}></div>
            </div>
            <div className="quiz__choice">
              <p className="quiz__agree text">Agree</p>
              <p className="quiz__disagree text">Disagree</p>
            </div>
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

const mapStateToProps = ({ quizReducer }) => {
  const { singleQuestionHighestScore } = quizReducer
  return ({
    singleQuestionHighestScore
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails)
