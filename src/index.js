import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './contexts/products_context'
import { FilterProvider } from './contexts/filters_context'
import { CartProvider } from './contexts/cart_context'
import { Auth0Provider } from "@auth0/auth0-react";
// const domain = process.env.REACT_STORE_DOMAIN;
// const clientId = process.env.REACT_STORE_DOMAIN;
ReactDOM.render(
  <React.StrictMode>

    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Auth0Provider
            domain={`${process.env.REACT_APP_DOMAIN}`}
            clientId={`${process.env.REACT_APP_CLIENT_ID}`}
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

