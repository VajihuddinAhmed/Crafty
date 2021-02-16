import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51ILZJyGRdJjKw7QHvTpyBpni1e8wVZ93ZXuTMeByiMgts4o31wBgUmYohI0JfDXVG8tDKVhGMSk2JRWrK0yCo6eu00tvMq2ryn'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crafty"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is €${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;