import React from 'react';
import './HomePage.css';

//Components
import { Header } from '../../Components';
import BalanceBox from './components/BalanceBox';
import TransactionContainer from './components/TransactionContainer';

function HomePage() {
    return (
        <div className='HomePage'>
            <Header />
            <section>
                <div className='BalancesContainer'>
                    <BalanceBox />
                    <BalanceBox />
                    <BalanceBox />
                </div>
                <div className='HistoryContainer'>
                    <div className='HeaderHistoryTopDiv'>
                        <p className='HistoryHeader'>Transaction <span>History</span> </p>
                        <div className='NewTransactionButton'>
                            <p>New Transaction</p>
                        </div>
                    </div>
                    <TransactionContainer />
                </div>
            </section>
        </div>
    );
}

export default HomePage;