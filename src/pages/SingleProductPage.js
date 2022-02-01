import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import { useProductsContext } from '../contexts/products_context';
import { single_product_url } from '../utils.js/constants';
import Loading from '../components/Loading'
const SingleProductPage = () => {
  const { id } = useParams();
  const { fetchSingleProduct, single_product, single_product_error: error, single_product_loading: loading } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(single_product_url, id);
    console.log(single_product)
  }, [])

  if (loading) {
    return <Loading />
  }
  return <Wrapper>

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
