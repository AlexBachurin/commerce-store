// import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../contexts/cart_context';
import { formatPrice } from '../utils.js/helpers';
import { useAuthContext } from '../contexts/authContext';
const CartTotals = () => {
  const { total_price, shipping_fee } = useCartContext();
  const { signIn, isAuthenticated, user } = useAuthContext();
  const isUser = isAuthenticated && user;
  return <Wrapper>
    <div>
      <article>
        <h5>subtotal: <span>{formatPrice(total_price)}</span></h5>
        <p>Shipping fee: <span>{formatPrice(shipping_fee)}</span></p>
        <h4>Order total: <span>{formatPrice(total_price + shipping_fee)}</span></h4>
      </article>
      {/* //if authenticated and user exists show checkout button, else show login button */}
      {isUser ? <Link className='btn' to={'/checkout'}>Checkout</Link> : <button onClick={() => signIn()} className='btn'>Login</button>}
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals;
