import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Statistics from '../components/Statistics';
import QuizInfo from '../components/QuizInfo';
import FAQInfo from '../components/FAQInfo';
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
        <Route path="/quiz" component={QuizInfo} exact={true} />
        <PrivateRoute path="/quiz/:id" component={QuizContent} />
        <PrivateRoute path="/results" component={Results} />
        <Route path="/faq" component={FAQInfo} exact={true} />
        <Route path="/faq/:id" component={FAQDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
