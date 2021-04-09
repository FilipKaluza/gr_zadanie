import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider  } from "react-redux";
import { createStore, compose, combineReducers } from 'redux';

// import reducer 
import contributionReducer from "./components/store/reducers/chooseContributionReducer";
import shelterIdReducer from "./components/store/reducers/shelterIdReducer";
import contactDataReducer from "./components/store/reducers/contactDataReducer";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose; // for redux extension in development

const rootReducer = combineReducers({
  contributionReducer: contributionReducer,
  shelterIdReducer: shelterIdReducer,
  contactDataReducer: contactDataReducer
})

const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>,
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
