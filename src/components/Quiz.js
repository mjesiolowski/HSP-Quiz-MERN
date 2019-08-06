import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { incrementCompletedSteps } from '../actions/quiz'
import { setUser } from '../actions/user'

const Quiz = ({ incrementCompletedSteps, setUser }) => {

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
    <div>
      <h2>About the quiz</h2>
      <p>
        Have you ever been told to overreacting or being "too sensitive"?
      </p>
      <p>
        Do you get this feeling that your senses are constantly stimulated?
      </p>
      <p>
        Do you worship your downtime as if it was the best part of your day?
      </p>
      <p>
        Do loud music and crowded places make you get irritated and overwhlemed, but at the same time you enjoy the company of your friends?
      </p>
      <p>
        Do you get this feeling that everyone around has much more energy that you?
    </p>
      <p>
        ...and this sudden "I need it now" request from you boss that ruins your well-planned schedule.
      </p>

      <p>
        I know what is going on. There is actually NOTHING going on and you are probably a Highly Sensitive Person, as 15-20% people on this planet.
      </p>

      <p>
        To find out, take these 20 questions quiz below.
      </p>


      <form onSubmit={(e) => { e.preventDefault(), console.log('submit') }}>
        <select
          name="gender"
          value={userGender}
          onChange={(e) => setUserGender(e.target.value)}
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <label>
          Age:
          <input type="number" value={userAge} onChange={(e) => setUserAge(parseInt(e.target.value, 10))} />
          {userAge === 0 && <p>Please remember to provide your age</p>}
        </label>
      </form>
      <Link
        to='/quiz/start'
        onClick={() => handleClick()}
      >START</Link>


    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementCompletedSteps: () => dispatch(incrementCompletedSteps()),
  setUser: (user) => dispatch(setUser(user))
})


export default connect(undefined, mapDispatchToProps)(Quiz)
