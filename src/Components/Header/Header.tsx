import React, {FC} from 'react';
import './Header.css';

interface HeaderProps {
    home: boolean,
    logout: () => void,
    navigate: (e: string) => void,
}

const Header: FC<HeaderProps> = ({navigate, home, logout}): JSX.Element => {
    return (
        <div className='Header'>
            <p className='Logo'>Panda<span>Pay</span></p>
            <div className='HeaderContainer'>
                <div className="HeaderButtons">
                    <p className= {home ? 'ActivePage' : 'UnactivePage'} onClick={() =>  navigate('/home')} >Overview</p>
                    <p className={!home ? 'ActivePage' : 'UnactivePage'} onClick={() =>  navigate('/transaction')}>Transfer</p>
                    <p className='LogoutButton' onClick={() =>  logout()} >Logout</p>
                </div>
            </div>
        </div>
    );
}

export default Header;