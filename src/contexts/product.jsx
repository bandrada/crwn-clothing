import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../authentication/firebase.js';

import SHOP_DATA from '../shop-data.js';

// actual value to access
export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);
    const value = { products };
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
