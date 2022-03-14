// domain/.netlify/functions/create-payment-intent
require('dotenv').config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
    if (event.body) {
        const { shipping_fee, total_price } = JSON.parse(event.body);
        //calculate total without connecting to API/server (normally we should do it, but this is learning project)
        const calculateOrderAmount = () => {
            return shipping_fee + total_price;
        }

        try {
            //connect to stripe
            const paymentIntent = await stripe.paymentIntents.create(
                {
                    amount: calculateOrderAmount(),
                    currency: 'usd'
                }
            )
            // if all good send it to stripe
            return {
                statusCode: 200,
                body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message })
            }
        }
    }
    return {
        statusCode: 200,
        body: 'create payment intent'
    }
}