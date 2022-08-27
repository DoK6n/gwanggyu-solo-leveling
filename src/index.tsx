import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <h1>Hello, React</h1>
  </React.StrictMode>
);
