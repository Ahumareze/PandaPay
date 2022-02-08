import React, {FC} from 'react';

interface HeaderProps {
    setLogin: (e: boolean) => void;
    isLogin: boolean
}

const Header: FC<HeaderProps> = ({setLogin, isLogin}): JSX.Element => {

    const onPress = (e: boolean) => {
        setLogin(e);
    }

    return (
        <div className='LandingPageHeader'>
            <p className='Logo'>Panda<span>Pay</span></p>
            <div className='LandingPageHeaderContainer'>
                <div className='LandingPageButtons'>
                    <div className={isLogin ? 'activeButton' : 'inactiveButton' } onClick={() => onPress(true)} >
                        <p>Login</p>
                    </div>
                    <div className={!isLogin ? 'activeButton' : 'inactiveButton' } onClick={() => onPress(false)} >
                        <p>Register</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;