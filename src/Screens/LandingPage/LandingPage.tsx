import React from 'react';
import GoldBall from '../../Components/Balls/GoldBall';
import PurpleBall from '../../Components/Balls/PurpleBall';
import CreditCard from '../../Components/CreditCard/CreditCard';
import './LandingPage.css';

import {FiChevronRight} from 'react-icons/fi'

const width = window.innerWidth;

function LandingPage() {
    return (
        <div className='LandingPage'>
            <div className='LandingHeader'>
                <p>FlarePanda</p>
            </div>
            <div className='LandingPageDetails'>
                <h1>Purchase bitcoin the easy way</h1>
                <p>Buying bitcoin with just your credit or debit card</p>
            </div>
            <div className='LandingPageRowColumns'>
                <div className='LandingPageRow1 FL'>
                    <PurpleBall />
                </div>
                <div className='LandingPageRow2'>
                    <CreditCard />
                </div>
                <div className='LandingPageRow1'>
                    <GoldBall />
                </div>
            </div>
            <div className='LandingPageBottom'>
                <div className='LandingPageBottom_Button'>
                    <p>Get started</p>
                    <FiChevronRight size={30} color='#FFD700' style={{margin: 0}} />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;