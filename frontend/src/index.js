
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Zmiana importu


import Mainpage from './Mainpage';
import reportWebVitals from './reportWebVitals';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('_react')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();