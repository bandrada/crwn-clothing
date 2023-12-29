import './directory.scss';
import DirectoryItem from './directory-item';

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map(({ title, id, imageUrl}) => (
                <DirectoryItem key={id} item={{title, imageUrl}}/>
            ))}
        </div>
    );
}

export default Directory;