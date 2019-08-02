const quizDefaultState = {
  answers: 0,
  points: 0,
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
        answers: state.answers + 1,
      }
  }
}