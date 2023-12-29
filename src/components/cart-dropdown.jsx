import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../contexts/cart';

import Button from './button';
import CartItem from './cart-item';

import './cart-dropdown.scss';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        closeDropdown();
    }

    const closeDropdown = () => {
        setIsCartOpen(false);
    }

    return (
        <div className='cart-dropdown-container' onMouseUp={closeDropdown}>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;