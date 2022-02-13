import React, {FC, useState} from 'react';
import './Header.css';

interface HeaderProps {
    home: boolean,
    userName: string,
    logout: () => void,
    navigate: (e: string) => void,
}

const Header: FC<HeaderProps> = ({navigate, home, logout, userName}): JSX.Element => {
    const [showModal, setShowModal] = useState(false);

    const onClick = () => {
        setShowModal(prev => !prev)
    }

    return (
        <>
            <div className='Header'>
                <p className='Logo'>Panda<span>Pay</span></p>
                <div className='HeaderContainer'>
                    <div className="HeaderButtons">
                        <p className= {home ? 'ActivePage' : 'UnactivePage'} onClick={() =>  navigate('/home')} >Overview</p>
                        <p className={!home ? 'ActivePage' : 'UnactivePage'} onClick={() =>  navigate('/transaction')}>Transfer</p>
                        <p className='LogoutButton' onClick={() =>  onClick()} >{userName}</p>
                    </div>
                </div>
            </div>
            {showModal && <div className='Modal'>
                <div className='ModalContainer'>
                    <p className='ModalTitle'>Logout of account</p>
                    <p className="ModalDetails">Are you sure you want to logout of your Pandapay account</p>
                    <div className='ModalBottom'>
                        <div className='ModalCancleButton' onClick={() => onClick() } >
                            <p>Cancle</p>
                        </div>
                        <div className='ModallogoutButton' onClick={() => logout() } >
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Header;