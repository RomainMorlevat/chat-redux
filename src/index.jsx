// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import channelsReducer from './reducers/channels_reducer';
import currentUserNameReducer from './reducers/current_user_name_reducer';
import messagesReducer from './reducers/messages_reducer';

const initialState = {
  channels: ['general', 'react', 'Lyon'],
  // currentUserName: prompt("What's your name ?") || `john_doe-${Math.floor(Math.random()*100)}`,
  currentUserName: `john_doe-${Math.floor(Math.random()*100)}`,
  messages: [
    {
      author: "anonymous92",
      content: "Hello world!",
      created_at: "2017-09-26T23:03:16.365Z",
      id: 1
    },
    {
      author: "anonymous77",
      content: "My name is anonymous77",
      created_at: "2017-09-26T23:03:21.194Z",
      id: 2
    }
  ]
};

const reducers = combineReducers({
  channels: channelsReducer,
  currentUserName: currentUserNameReducer,
  messages: messagesReducer
});

const middlewares = applyMiddleware(logger, promiseMiddleware);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
