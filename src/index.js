import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './redux/posts';
// import { postsReducer } from './redux/reducers/postsReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: postsReducer,
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
