import SignUpForm from '../sign-up-form/sign-up-form';
import SignInForm from '../sign-in-form/sign-in-form';

import './auth-page.scss';

const AuthPage = () => {
    return (
        <div className='auth-page-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default AuthPage;