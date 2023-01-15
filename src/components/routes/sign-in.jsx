// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
    // auth, 
    signInWithGooglePopup,
    createUserDocFromAuth
    // signInWithGoogleRedirect
 } from '../../authentication/firebase';

import SignUpForm from '../sign-up-form/sign-up-form';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    };

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);

    //     if(response) {
    //         const userDocRef = await createUserDocFromAuth(response.user);
    //     }
    // }, []);

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;