import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider  } from "react-redux";
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

// import reducer 
import contributionReducer from "./components/store/reducers/contributionReducer";
import fetchSheltersReducer from "./components/store/reducers/fetchSheltersReducer";

// import Router
import { BrowserRouter } from "react-router-dom";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose; // for redux extension in development

const rootReducer = combineReducers({
  contributionReducer: contributionReducer,
  fetchSheltersReducer: fetchSheltersReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>,
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
