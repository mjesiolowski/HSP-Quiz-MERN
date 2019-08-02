import { createStore } from 'redux';
import { quizReducer } from '../reducers/quiz'

export default () => {
  const store = createStore(quizReducer);

  return store;
};

