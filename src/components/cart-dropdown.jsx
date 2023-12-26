import './cart-dropdown.scss';

import Button from './button';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;