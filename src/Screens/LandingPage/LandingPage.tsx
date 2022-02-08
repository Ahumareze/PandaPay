import React from 'react';
import './LandingPage.css';

//Components
import Header from './components/Header';
import Form from './components/Form';

function LandingPage() {
    return (
        <div className='LandingPage'>
            <Header />
            <div className='LandingPageBody'>
                <div className='LandingPageDetails'>
                    <p><span>Easy </span>way <br/>to <br/>transfer <br />money</p>
                </div>
                <div className="LandingPageFormContainer">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;