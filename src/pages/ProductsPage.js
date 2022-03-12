import React from 'react';
import styled from 'styled-components';
import { HeroNavigation, ProductsDisplay, ProductsFilter, ProductsSort } from '../components';

const ProductsPage = () => {
  return <main>
    <HeroNavigation pageName={'products'} />
    <Wrapper className='page'>
      <div className="section-center products">
        <ProductsFilter />
        <div>
          <ProductsSort />
          <ProductsDisplay />
        </div>
      </div>
    </Wrapper>;
  </main>

};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage;
