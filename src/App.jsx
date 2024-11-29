import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/product-view" element={<ProductViewPage />} />
          </Routes>
        <Footer />
      </Router>
  );
};

export default App;
