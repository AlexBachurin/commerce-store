import React from 'react';
import styled from 'styled-components'
import { HeroNavigation, StripeCheckout } from '../components';

// extra imports
import { useCartContext } from '../contexts/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const { cart } = useCartContext();
    return <main>
        <HeroNavigation pageName='Checkout' />
        {/* //if cart is empty show message if not show checkout */}
        {cart.length === 0 ?
            <EmptyWrapper className='page-100'>
                <div className="empty">
                    <h2>Your cart is empty</h2>
                    <Link className='btn' to='/products'>Fill it</Link>
                </div>
            </EmptyWrapper>
            :
            <Wrapper className='page'>
                <h1>checkout here</h1>
            </Wrapper>
        }

    </main>;
};

const EmptyWrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

const Wrapper = styled.div`

`
export default CheckoutPage;
