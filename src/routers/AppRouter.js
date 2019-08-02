import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import Quiz from '../components/Quiz';
import FAQDetails from '../components/FAQDetails';
import QuizContent from '../components/QuizContent';


const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/quiz" component={Quiz} exact={true} />
      <Route path="/quiz/:id" component={QuizContent} />
      <Route path="/content/:id" component={FAQDetails} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
