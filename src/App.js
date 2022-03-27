
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from "./components";
import { HomePage, AboutPage, ProductsPage, SingleProductPage, CartPage, ErrorPage, CheckoutPage, RequireAuth } from './pages';
function App() {
  return (
    // <AuthWrapper>
    // <Router>
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        {/* //if user authenticated we can go to checkout page, if not then redirect to home page */}
        <Route
          path="/checkout"
          element={
            // Good! Do your composition here instead of wrapping <Route>.
            // This is really just inverting the wrapping, but it's a lot
            // more clear which components expect which props.
            <RequireAuth redirectTo="/">
              <CheckoutPage />
            </RequireAuth>
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
    // </Router>
    // </AuthWrapper>

  );
}

export default App;
