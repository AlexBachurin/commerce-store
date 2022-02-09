import React from 'react';
import styled from 'styled-components'
import { CartContent, HeroNavigation } from '../components'
const CartPage = () => {
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
