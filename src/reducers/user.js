const userReducerDefaultState = {
  gender: '',
  age: 0
}

export const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...action.user
      }
    default: return state
  }
}