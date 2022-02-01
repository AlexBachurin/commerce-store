import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from "./components";
import { HomePage, AboutPage, ProductsPage, SingleProductPage, CartPage, ErrorPage } from './pages';
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
