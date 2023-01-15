import { useState } from 'react';

import { 
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth
 } from '../../authentication/firebase';

import FormInput from '../form-input/form-input';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFeilds, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFeilds;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFeilds, [name]: value })
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
        <div>
            <h1>Sign up with email and password</h1>
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
                    label='Confirm Passwor'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}
                />

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUpForm;