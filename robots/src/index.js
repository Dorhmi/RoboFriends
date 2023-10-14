import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import CardsContainer from './Cardscontainer';
import reportWebVitals from './reportWebVitals';
// import { robots } from './robots';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout></Layout>
    {/* <CardsContainer robots={robots} /> */}
  </React.StrictMode>
);

reportWebVitals();