import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
