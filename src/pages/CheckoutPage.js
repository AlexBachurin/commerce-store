import React from 'react';
import styled from 'styled-components'
import { HeroNavigation, StripeCheckout } from '../components';
const CheckoutPage = () => {
    return <main>
        <HeroNavigation pageName='Checkout' />
        <Wrapper className='page'>
            <h1>checkout here</h1>
        </Wrapper>
    </main>;
};

const Wrapper = styled.div`

`
export default CheckoutPage;
