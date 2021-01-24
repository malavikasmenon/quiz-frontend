import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login';
import SignUp from './pages/signup';
import UserHome from './users/userhome';
import AttemptTest from './users/AttemptTest';
import CreateTest from './users/CreateTest';
import TestName from './users/testname';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import QuizQuestion from './quiz/QuizQuestion';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pages/login" component={Login} />
        <Route path="/pages/signup" component={SignUp} />
        <Route path="/users/userhome" component={UserHome} />
        <Route path="/users/create" component = {CreateTest} />
        <Route path="/users/attempt" component = {AttemptTest} />
        <Route path="/users/testname" component={TestName} />
        <Route path="/quiz/quizquestion" component={QuizQuestion} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
