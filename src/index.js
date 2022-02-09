import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './contexts/products_context'
import { FilterProvider } from './contexts/filters_context'
import { CartProvider } from './contexts/cart_context'
ReactDOM.render(
  <React.StrictMode>

    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

