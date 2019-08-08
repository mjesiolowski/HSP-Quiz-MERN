import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { incrementCompletedSteps } from '../actions/quiz'
import { setUser } from '../actions/user'

const QuizInfo = ({ incrementCompletedSteps, setUser }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [userAge, setUserAge] = useState(0)
  const [userGender, setUserGender] = useState("M")

  const handleClick = () => {
    if (userAge > 0 && userAge < 120) {
      incrementCompletedSteps()
      setUser({
        gender: userGender,
        age: userAge
      })
    }

  }

  return (
    <div className="quiz">
      <div className="quiz__content">
        <h2 className="title">About the quiz</h2>
        <p className="text">
          Have you ever been told to overreacting or being "too sensitive"?
      </p>
        <p className="text">
          Do you get this feeling that your senses are constantly stimulated?
      </p>
        <p className="text">
          Do you worship your downtime as if it was the best part of your day?
      </p>
        <p className="text">
          Do loud music and crowded places make you get irritated and overwhlemed, but at the same time you enjoy the company of your friends?
      </p>
        <p className="text">
          Do you get this feeling that everyone around has much more energy that you?
    </p>
        <p className="text">
          ...and this sudden "I need it now" request from you boss that ruins your well-planned schedule.
      </p>

        <p className="text">
          I know what is going on. There is actually NOTHING going on and you are probably a Highly Sensitive Person, as 15-20% people on this planet.
      </p>

        <p className="text">
          To find out, take these 20 questions quiz below.
      </p>


        <form
          className="form"
          onSubmit={(e) => { e.preventDefault() }}>
          <label
            className="form__label">
            Gender:
        <select
              className="form__select"
              name="gender"
              value={userGender}
              onChange={(e) => setUserGender(e.target.value)}
            >
              <option
                value="M">Male</option>
              <option
                value="F">Female</option>
            </select>
          </label>

          <label
            className="form__label"
          >
            Age:
          <input
              className="form__input"
              type="number"
              value={userAge}
              onChange={(e) => setUserAge(parseInt(e.target.value, 10))} />
            {userAge <= 0 && <p className="form__alert" style={{ color: '#f4511e' }}>Please remember to provide your age.</p>}
          </label>
        </form>
        <Link
          className="link button"
          to='/quiz/start'
          onClick={() => handleClick()}
        >START</Link>
        <Link
          className="link button"
          to='/'
          onClick={() => handleClick()}
        >RETURN</Link>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementCompletedSteps: () => dispatch(incrementCompletedSteps()),
  setUser: (user) => dispatch(setUser(user))
})


export default connect(undefined, mapDispatchToProps)(QuizInfo)
