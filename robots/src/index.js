import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardsContainer from './Cardscontainer';
import reportWebVitals from './reportWebVitals';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardsContainer robots={robots} />
  </React.StrictMode>
);

reportWebVitals();