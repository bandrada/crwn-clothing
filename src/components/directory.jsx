import './directory.scss';
import CategoryItem from './category-item';

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map(({ title, id, imageUrl}) => (
                <CategoryItem key={id} item={{title, imageUrl}}/>
            ))}
        </div>
    );
}

export default Directory;