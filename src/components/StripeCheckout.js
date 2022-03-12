import React from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import {
    CardElement,
    useStripe,
    Elements,
    useElements
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { useCartContext } from '../contexts/cart_context'
import { formatPrice } from '../utils.js/helpers'
import { useHistory } from 'react-router-dom'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
    return <h2>hello this is stripe checkout</h2>
}

const StripeCheckout = () => {
    return (
        <Wrapper>
            <Elements stripe={promise} />
            <CheckoutForm />
        </Wrapper>
    )
}
const Wrapper = styled.section`

`
export default StripeCheckout