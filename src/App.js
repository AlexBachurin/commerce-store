import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from "./components";
import { HomePage, AboutPage, ProductsPage, SingleProductPage } from './pages'
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
