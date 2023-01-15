import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './nav-bar.scss';

const NavBar = () => {
  return (
    <Fragment>
      <div className='nav-bar'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavBar;