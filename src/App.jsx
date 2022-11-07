import React from 'react';
import './App.css';
import {
  Route, Routes,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Contact from './components/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
