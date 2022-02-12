import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from "./components";
import { HomePage, AboutPage, ProductsPage, SingleProductPage, CartPage, ErrorPage, CheckoutPage } from './pages';
function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
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
        {/* //if user authenticated we can go to checkout page, if not then redirect to home page */}
        <Route path='/checkout' element={isUser ? <CheckoutPage /> : <Navigate to={'/'} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
