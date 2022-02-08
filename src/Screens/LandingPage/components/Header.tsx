import React from 'react';

function Header() {
    return (
        <div className='LandingPageHeader'>
            <p className='Logo'>Panda<span>Pay</span></p>
            <div className='LandingPageHeaderContainer'>
                <div className='LandingPageButtons'>
                    <div className='LoginButton'>
                        <p>Login</p>
                    </div>
                    <div className='RegisterButton'>
                        <p>Register</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;