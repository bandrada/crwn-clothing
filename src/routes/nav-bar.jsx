import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../logo.svg'

import { UserContext } from '../contexts/user';
import { signOutUser } from '../authentication/firebase';

import './nav-bar.scss';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  }
  
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
            {
              (currentUser ? 
                <span className='nav-link' onClick={signOutHandler}>
                  {' '}SIGN OUT{' '}
                </span> : 
                <Link className='nav-link' to='/auth'>
                  SIGN IN
                </Link>
              )
            }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavBar;