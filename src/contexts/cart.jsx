import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

// actual value to access
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartQuantity: 0,
    cartTotal: 0,
    changeCartQuantity: () => {},
    removeFromCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartQuantity(cartCount);
        const newTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setCartTotal(newTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const changeCartQuantity = (id, change) => {
        const updatedItems = cartItems.map((item) => {
            if(item.id === id) {
                if (item.quantity === 1 && change < 0) {
                    // nothing
                } else {
                    item.quantity += change;
                }
                return item;
            }
            return item;
        });
        setCartItems(updatedItems);
    }

    const removeFromCart = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartQuantity, cartTotal, removeFromCart, changeCartQuantity };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
