import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({
  completedSteps,
  component: Component,
  ...rest
}) => {

  return (
    <Route {...rest} component={(props) => (
      completedSteps ? (
        <Component {...props} />
      ) : (
          <Redirect to="/quiz/" />
        )

    )} />)
}

const mapStateToProps = ({ quizReducer }) => {

  const { completedSteps } = quizReducer
  return ({
    completedSteps
  })
}

export default connect(mapStateToProps)(PrivateRoute)
