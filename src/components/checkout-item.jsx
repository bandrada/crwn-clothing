import './checkout-item.scss';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = { ...cartItem };
    const increment = () => {
        console.log('increment');
    }

    const decrement = () => {
        console.log('decrement');
    }

    const remove = () => {
        console.log('remove');
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