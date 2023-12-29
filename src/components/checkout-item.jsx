import './checkout-item.scss';

import { useContext } from 'react';

import { CartContext } from '../contexts/cart';

const CheckoutItem = ({cartItem}) => {
    const { removeFromCart, changeCartQuantity } = useContext(CartContext);
    const { id, name, imageUrl, price, quantity } = { ...cartItem };

    const increment = () => {
        changeCartQuantity(id, 1);
    }

    const decrement = () => {
        changeCartQuantity(id, -1);
    }

    const remove = () => {
        removeFromCart(id);
    }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrement}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={increment}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={remove}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;