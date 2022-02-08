import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import { useProductsContext } from '../contexts/products_context';
import { single_product_url } from '../utils.js/constants';
import { Loading, Error, HeroNavigation, ProductImages, ProductContent } from '../components'
const SingleProductPage = () => {
  const { id } = useParams();
  const { fetchSingleProduct, single_product, single_product_error: error, single_product_loading: loading } = useProductsContext();


  useEffect(() => {
    fetchSingleProduct(single_product_url, id);
    // eslint-disable-next-line 
  }, [])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const { images, name } = single_product;
  return <Wrapper>
    <HeroNavigation pageName={name} product={single_product} />
    <div className="section section-center">
      <Link to={'/products'} className='btn'>Back to Products</Link>
      <div className="product-center">
        <ProductImages images={images} />
        <ProductContent product={single_product} />
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage;
