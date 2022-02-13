import React, {FC, useEffect, useState} from 'react';

import FormInput from './FormInput';

interface FormProps {
    isLogin: boolean,
    errorMessage: any,
    setLogin: (e:boolean) => void,
    authLogin: (e: object) => void,
    authSignup: (e: object) => void
}

const Form: FC<FormProps> = ({isLogin, setLogin, authLogin, authSignup, errorMessage}): JSX.Element => {
    const [username, setUsername] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [phone, setPhone] = useState<any>();
    const [password, setPassword] = useState<any>();

    const changeForm = (e:boolean) => {
        setLogin(e)
    }

    const submitLogin = () => {
        const data = {
            email: email,
            password: password,
        };
        authLogin(data)
    };

    const submitRegister = () => {
        const data = {
            username: username,
            email: email,
            phone: phone,
            password: password
        };
        authSignup(data)
    }

    const loginForm = (
        <>
            <p className='FormTitle'>Login</p>
            <div className='Inputs'>
                <p className='FormErrorMessage'>{errorMessage}</p>
                <FormInput title='Email' setValue={(e) => setEmail(e)} secure={false} />
                <FormInput title='Password' setValue={(e) => setPassword(e)} secure />
            </div>
            <div className='AuthButton' onClick={() => submitLogin() } >
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
                <p className='FormErrorMessage'>{errorMessage}</p>
                <FormInput title='Username'  setValue={(e) => setUsername(e)} secure={false} />
                <FormInput title='Email' setValue={(e) => setEmail(e)} secure={false} />
                <FormInput title='Phone number' setValue={(e) => setPhone(e)} secure={false} />
                <FormInput title='Password' setValue={(e) => setPassword(e)} secure />
            </div>
            <div className='AuthButton' onClick={() => submitRegister()} >
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