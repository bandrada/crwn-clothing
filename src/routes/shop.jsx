import { useContext } from 'react';

import './shop.scss';

import { CategoriesContext } from '../contexts/categories';
import CategoryPreview from '../components/category-preview';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    
    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map(title => {
               const products = categoriesMap[title];
               return <CategoryPreview key={title} title={title} products={products} />
            })}
        </div>
    );
};

export default Shop;