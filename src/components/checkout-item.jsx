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
            <div className='name'>{name}</div>
            <span className='quantity'>
                <div className='arrow' onClick={decrement}>{`<`}</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={increment}>{`>`}</div>
            </span>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={remove}>X</div>
        </div>
    );
};

export default CheckoutItem;