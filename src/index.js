import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GlobalStyle } from './styles/global';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <GlobalStyle />
        <Router>
          <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </Router>
    </React.StrictMode>
  </>
);

