import { useContext } from 'react';

import { CartContext } from '../contexts/cart';

import CheckoutItem from '../components/checkout-item';

import './checkout.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <span>Product |  Description   |  Quantity   |  Price   | Remove</span>
            <h2 className='checkout-header'>
                <span className='header-block'>
                </span>
            </h2>
            <div>
                {cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item}/>)}
            </div>
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    );
};

export default Checkout;