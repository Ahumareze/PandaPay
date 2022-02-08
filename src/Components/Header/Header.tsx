import React, {FC} from 'react';
import './Header.css';

interface HeaderProps {
    home: boolean,
    navigate: (e: string) => void
}

const Header: FC<HeaderProps> = ({navigate, home}): JSX.Element => {
    return (
        <div className='Header'>
            <p className='Logo'>Panda<span>Pay</span></p>
            <div className='HeaderContainer'>
                <div className="HeaderButtons">
                    <p className= {home ? 'ActivePage' : 'UnactivePage'} onClick={() =>  navigate('/home')} >Overview</p>
                    <p className={!home ? 'ActivePage' : 'UnactivePage'} onClick={() =>  navigate('/transaction')}>Send Money</p>
                </div>
            </div>
        </div>
    );
}

export default Header;