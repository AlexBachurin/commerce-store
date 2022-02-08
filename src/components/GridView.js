import React from 'react';
import styled from 'styled-components';
import Product from './Product';
const GridView = ({ products }) => {
    return <Wrapper>
        <div className="products-container">
            {/* //iterate through products we get from ProductsDisplay component and return Product component
            since we have same display for item as in our featured products */}
            {products.map(item => {
                return <Product key={item.id} {...item} />
            })}
        </div>
    </Wrapper>;
};
const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default GridView;
