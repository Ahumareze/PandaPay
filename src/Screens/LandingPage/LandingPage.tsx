import React from 'react';
import GoldBall from '../../Components/Balls/GoldBall';
import PurpleBall from '../../Components/Balls/PurpleBall';
import './LandingPage.css';

const width = window.innerWidth;

function LandingPage() {
    return (
        <div className='LandingPage'>
            <div className='LandingHeader'>
                <p>FlarePanda</p>
            </div>
            <div className='LandingPageDetails'>
                <p>Purchase bitcoin the wasy way</p>
            </div>
            <div className='LandingPageRowColumns'>
                <div className='LandingPageRow1 FL'>
                    <PurpleBall />
                </div>
                <div className='LandingPageRow2'></div>
                <div className='LandingPageRow1'>
                    <GoldBall />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;