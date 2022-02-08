import React from 'react';

import FormInput from './FormInput';

function Form() {
    return (
        <div className='FormContainer'>
            <p className='FormTitle'>Register</p>
            <div className='Inputs'>
                <FormInput />
                <FormInput />
                <FormInput />
            </div>
            <div className='AuthButton'>
                <p>Create account</p>
            </div>
            <div className='ExtraLink'>
                <p>already have an account? <span>Login</span> </p>
            </div>
        </div>
    );
}

export default Form;