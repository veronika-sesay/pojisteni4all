import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Pojištění 4all</h1>
      </header>
      <main>
        <p>Obsah</p>
      </main>
      <footer>
        <p>Veronika Sesay</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
