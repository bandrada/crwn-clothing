import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "./button";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000 })
        });

        console.log(response);
        console.log(response.paymentIntent);
        if (!response.paymentIntent){
            console.log('no payment intent');
            return;
        }
        console.log(response.paymentIntent.client_secret);
        const {paymentIntent: { client_secret }} = response;

        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Bandrada.Dev'
                }
            }
        });

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    };
    return (
        <div className='payment-form-container'>
            <div className='body'>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button buttonType='inverted' onClick={paymentHandler}>Pay Here</Button>
            </div>
        </div>
    );
};

export default PaymentForm;