import { useContext } from 'react';

import { CartContext } from '../contexts/cart';

import Button from './button';

import './product-card.scss';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;