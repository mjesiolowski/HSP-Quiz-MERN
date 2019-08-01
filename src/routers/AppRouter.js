import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import Quiz from '../components/Quiz';


const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/statistics" component={Statistics} exact={true} />
      <Route path="/quiz" component={Quiz} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
