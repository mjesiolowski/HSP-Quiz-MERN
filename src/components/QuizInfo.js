import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { incrementCompletedSteps, resetSettings } from '../actions/quiz'
import { setUser } from '../actions/user'

const QuizInfo = ({ incrementCompletedSteps, resetSettings, setUser }) => {

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   resetSettings()
  // }, [])



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
    <section className="quiz">
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
          To find out, take these <strong>20 questions</strong> quiz below.
      </p>
      </div>

      <form
        className="quiz__form form"
        onSubmit={(e) => { e.preventDefault() }}>
        <label
          className="form__label text">
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
          className="form__label text"
        >
          Age:
          <input
            className="form__input"
            type="number"
            value={userAge}
            onChange={(e) => setUserAge(parseInt(e.target.value, 10))} />
          <p
            className="form__alert"
            style={userAge <= 0 ? { color: '#f4511e', opacity: 1 } : { opacity: 0 }}>
            Please remember to provide your age.</p>
        </label>
      </form>

      <div className="buttons buttons--vertical">
        <Link
          className="quiz__button link button"
          to='/'
        >RETURN</Link>
        <Link
          className="quiz__button link button"
          to='/quiz/start'
          onClick={() => handleClick()}
        >START</Link>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementCompletedSteps: () => dispatch(incrementCompletedSteps()),
  resetSettings: () => dispatch(resetSettings()),
  setUser: (user) => dispatch(setUser(user)),
})


export default connect(undefined, mapDispatchToProps)(QuizInfo)
