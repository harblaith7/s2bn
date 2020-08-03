import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import setAuthToken from './utils/setAuthToken'

if(localStorage.token){
    setAuthToken(localStorage.token)
  }



ReactDOM.render(<App />, document.getElementById('root'));

