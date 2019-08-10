const quizDefaultState = {
  answeredCount: 0,
  points: 0,
  currentSet: 1,
  completedSteps: 1,
  singleQuestionHighestScore: 4,
  isHSPScore: 60
}

export const quizReducer = (state = quizDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POINTS':
      return {
        ...state,
        points: state.points + action.points
      }
    case 'ADD_ANSWER':
      return {
        ...state,
        answeredCount: state.answeredCount + 1,
      }
    case 'INCREMENT_SET':
      return {
        ...state,
        currentSet: state.currentSet + 1
      }
    case 'INCREMENT_STEPS':
      return {
        ...state,
        completedSteps: state.completedSteps + 1
      }

    case 'RESET_SETTINGS':
      return {
        ...state,
        answeredCount: 0,
        currentSet: 1,
        completedSteps: 0,
        points: 0
      }
    default: return state
  }
}