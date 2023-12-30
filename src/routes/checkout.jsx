import { useContext } from 'react';

import { CartContext } from '../contexts/cart';

import CheckoutItem from '../components/checkout-item';
import PaymentForm from '../components/payment-form';

import './checkout.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item}/>)}
            </div>
            <div className='total'>TOTAL: ${cartTotal}</div>
            <PaymentForm />
        </div>
    );
};

export default Checkout;