import { useState } from 'react';
import { 
    signInWithGooglePopup,
    signInWithEmailPasswordAuth
} from "../../authentication/firebase";

import Button from "../button/button";
import FormInput from "../form-input/form-input";

import './sign-in-form.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const signInWithEmail = async (event) => {
        event.preventDefault();

        try {
            await signInWithEmailPasswordAuth(email, password);
            resetForm();
        } catch (error) {
            if(error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password'){
                alert('Incorrect Email or Password');
            } else {
                console.log(error);
            }
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    return (
        <div className='sign-in-container'>
            <h2>Already Have an Account?</h2>
            <span>Sign in with your email or Google</span>
            <form>
                <FormInput 
                    label='Email'
                    type='email'
                    required
                    onChange={onChangeHandler}
                    name='email'
                    value={email}
                />
                <FormInput 
                    label='Password'
                    type='password'
                    required
                    onChange={onChangeHandler}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit' onClick={signInWithEmail}>
                        Sign In
                    </Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;