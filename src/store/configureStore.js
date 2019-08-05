import { createStore, combineReducers } from 'redux';
import { quizReducer } from '../reducers/quiz'
import { userReducer } from '../reducers/user'

export default () => {
  const store = createStore(combineReducers({
    quizReducer,
    userReducer
  }));

  return store;
};

