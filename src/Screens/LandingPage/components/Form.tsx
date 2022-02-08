import React, {FC} from 'react';

import FormInput from './FormInput';

interface FormProps {
    isLogin: boolean,
    setLogin: (e:boolean) => void
}

const Form: FC<FormProps> = ({isLogin, setLogin}): JSX.Element => {

    const changeForm = (e:boolean) => {
        setLogin(e)
    }

    const loginForm = (
        <>
            <p className='FormTitle'>Login</p>
            <div className='Inputs'>
                <FormInput title='Email' />
                <FormInput title='Password' />
            </div>
            <div className='AuthButton'>
                <p>Sign In</p>
            </div>
            <div className='ExtraLink'>
                <p>Don't have an account? <span onClick={() => changeForm(false)}>Register</span> </p>
            </div>
        </>
    );

    const registerForm = (
        <>
            <p className='FormTitle'>Register</p>
            <div className='Inputs'>
                <FormInput title='Username' />
                <FormInput title='Email' />
                <FormInput title='Phone number' />
                <FormInput title='Password' />
            </div>
            <div className='AuthButton'>
                <p>Create account</p>
            </div>
            <div className='ExtraLink'>
                <p>already have an account? <span onClick={() => changeForm(true)}>Login</span> </p>
            </div>
        </>
    );

    return (
        <div className='FormContainer'>
            {isLogin ? loginForm : registerForm }
        </div>
    );
}

export default Form;