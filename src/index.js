import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import allReducers from './redux/reducers';
import reportWebVitals from './reportWebVitals';
// import Pruebas from './Components/Pruebas';

const myStore = createStore(allReducers,);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
