import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navigation } from './Navigation';
import { Home } from './Home';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <p>Veronika Sesay</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '3rem' }}>
              <p>Tady není vůbec nic!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
