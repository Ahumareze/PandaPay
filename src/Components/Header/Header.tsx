import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <p className='Logo'>Panda<span>Pay</span></p>
            <div className='HeaderContainer'>
                <div className="HeaderButtons">
                    <p className='ActivePage'>Overview</p>
                    <p className='UnactivePage'>Send Money</p>
                </div>
            </div>
        </div>
    );
}

export default Header;