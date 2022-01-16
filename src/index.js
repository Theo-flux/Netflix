import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from './GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContextProvider } from './context/firebase'


ReactDOM.render(
  <FirebaseContextProvider>  
    <Router>
      <GlobalStyles/>
      <App />
    </Router>
  </FirebaseContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
