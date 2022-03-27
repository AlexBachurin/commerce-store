import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './contexts/products_context'
import { FilterProvider } from './contexts/filters_context'
import { CartProvider } from './contexts/cart_context'
// import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider } from './contexts/authContext'
// const domain = process.env.REACT_STORE_DOMAIN;
// const clientId = process.env.REACT_STORE_DOMAIN;
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

