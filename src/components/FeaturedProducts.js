import React from 'react';
import styled from 'styled-components'
import Product from './Product';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../contexts/products_context';
import { Loading } from '.';
const FeaturedProducts = () => {
  const { featuredProducts, products_loading } = useProductsContext();
  return <Wrapper className='section'>
    <div className="title">
      <h2>featured products</h2>
      <div className="underline"></div>
    </div>
    <div className="section-center featured">
      {/* if loading display loading else display products */}
      {products_loading ? <Loading /> : <Products featuredProducts={featuredProducts} />}
    </div>
    <Link to={'/products'} className='btn'>All Products</Link>
  </Wrapper>;
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
//helper to display featured products
const Products = ({ featuredProducts }) => {
  return (
    <>
      {featuredProducts.map(product => {
        return <Product key={product.id} {...product} />
      })}
    </>
  )
}

export default FeaturedProducts;
