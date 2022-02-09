import React from 'react';
import styled from 'styled-components';
import CartColumns from './CartColumns';
import CartItemsList from './CartItemsList';
import { Link } from 'react-router-dom';
import CartTotals from './CartTotals';
const CartContent = () => {
    return <Wrapper>
        <CartColumns />
        <CartItemsList />
        <div className="link-container">
            <Link className='link-btn' to='/products'>continue shopping</Link>
            <button type='button' className='link-btn clear-btn'>clear cart</button>
        </div>
        <CartTotals />
    </Wrapper>;
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`

export default CartContent;
