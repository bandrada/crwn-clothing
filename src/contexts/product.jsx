import { createContext, useState, useEffect } from 'react';
import PRODUCTS from '../shop-data.json';
import { onAuthStateChangedListener, createUserDocFromAuth } from '../authentication/firebase';

// actual value to access
export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
