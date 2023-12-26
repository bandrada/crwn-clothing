import { useContext } from 'react';

import { ProductContext } from '../contexts/product';
import ProductCard from '../components/product-card';

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default Shop;