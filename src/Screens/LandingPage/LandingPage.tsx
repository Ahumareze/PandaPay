import React, {useState} from 'react';
import './LandingPage.css';

//Components
import Header from './components/Header';
import Form from './components/Form';

function LandingPage() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className='LandingPage'>
            <Header setLogin={(e) => setIsLogin(e)} isLogin={isLogin} />
            <div className='LandingPageBody'>
                <div className='LandingPageDetails'>
                    <p><span>Easy </span>way <br/>to <br/>transfer <br />money</p>
                </div>
                <div className="LandingPageFormContainer">
                    <Form isLogin={isLogin} setLogin={(e) => setIsLogin(e)} />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;