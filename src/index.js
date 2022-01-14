import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from './GlobalStyles'
import { FirebaseContextProvider } from './context/firebase'


ReactDOM.render(
  <FirebaseContextProvider>  
    <GlobalStyles/>
    <App />
  </FirebaseContextProvider>,
 
  document.getElementById('root')
);

reportWebVitals();
