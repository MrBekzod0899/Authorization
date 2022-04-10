import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const AuthContext=createContext()


ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider>
        <App />
    </AuthContext.Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

