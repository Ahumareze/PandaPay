import React from 'react';
import AuthGoldBall from '../../Components/AuthBalls/AuthGoldBall';
import AuthPupleBall from '../../Components/AuthBalls/AuthPupleBall';
import AuthForm from '../../Containers/AuthForm/AuthForm';
import './Auth.css';

function Auth() {
    return (
        <div className='AuthPage'>
            <div className='AuthHeader'>
                <p>Sign up</p>
            </div>
            <div className='AuthCanva'>
                <div className='AuthCanva_D1'>
                    <AuthPupleBall />
                </div>
                <div className='AuthCanva_D2'>
                    <AuthGoldBall />
                </div>
            </div>
            <div className='AuthMain'>
                <AuthForm />
            </div>
        </div>
    );
}

export default Auth;