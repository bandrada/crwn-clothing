import SignUpForm from '../components/sign-up-form';
import SignInForm from '../components/sign-in-form';

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