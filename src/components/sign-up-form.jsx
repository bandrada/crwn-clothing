import { useState } from 'react';

import { 
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth
 } from '../authentication/firebase';

import FormInput from './form-input';
import Button from './button';

import './sign-up-form.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //confirm password matches
        if(password !== confirmPassword){
            alert('Passwords does not match');
            return;
        }
        
        try {
            const { user } =  await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocFromAuth(user, { displayName });
            resetForm();
            
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email is already registered');
            } else {
                console.log('user creation error', error);
            }
        }
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account yet?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(handleSubmit)}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName}
                />
                <FormInput 
                    label='Email'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />
                <FormInput 
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <FormInput 
                    label='Confirm Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}
                />

                <Button buttonType='' type="submit">Sign up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;