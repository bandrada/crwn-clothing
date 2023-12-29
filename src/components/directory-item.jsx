import './directory-item.scss';

import { Link } from 'react-router-dom';

const DirectoryItem = ({item}) => {
  const { imageUrl, title } = item;
  return (
    <Link className='directory-item-container' to={'shop/' + title.toLowerCase()}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
}

export default DirectoryItem;