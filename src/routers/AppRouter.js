import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Nav from '../components/Nav';
import Statistics from '../components/Statistics';
import Quiz from '../components/Quiz';
import FAQ from '../components/FAQ';
import FAQDetails from '../components/FAQDetails';
import QuizContent from '../components/QuizContent';
import Results from '../components/Results';
import PrivateRoute from '../routers/PrivateRoute';


const AppRouter = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Nav />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/quiz" component={Quiz} exact={true} />
        <PrivateRoute path="/quiz/:id" component={QuizContent} />
        <PrivateRoute path="/results" component={Results} />
        <Route path="/faq" component={FAQ} exact={true} />
        <Route path="/faq/:id" component={FAQDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
