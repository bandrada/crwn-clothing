import { useContext } from 'react';

import { CartContext } from '../contexts/cart';

import Button from './button';
import CartItem from './cart-item';

import './cart-dropdown.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={console.log('checkout')}>CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;