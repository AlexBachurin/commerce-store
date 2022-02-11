import React from 'react';
import styled from 'styled-components'
import { CartContent, HeroNavigation } from '../components'
import { useCartContext } from '../contexts/cart_context';
import { Link } from 'react-router-dom';
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length === 0) {
    return <Wrapper className='page-100'>
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link className='btn' to='/products'>Fill it</Link>
      </div>
    </Wrapper>
  }
  return <main>
    <HeroNavigation pageName={'cart'} />
    <Wrapper className='page'>
      <CartContent />
    </Wrapper>
  </main>;
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage;
