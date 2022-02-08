import React from 'react';
import './HomePage.css';

//Components
import { Header } from '../../Components';
import BalanceBox from './components/BalanceBox';
import TransactionContainer from './components/TransactionContainer';

function HomePage(props: any) {

    const navigate = (e:string) => {
        props.history.push(e)
    }

    return (
        <div className='HomePage'>
            <Header home navigate={(e) => navigate(e)} />
            <section>
                <div className='BalancesContainer'>
                    <BalanceBox />
                    <BalanceBox />
                    <BalanceBox />
                </div>
                <div className='HistoryContainer'>
                    <div className='HeaderHistoryTopDiv'>
                        <p className='HistoryHeader'>Transaction <span>History</span> </p>
                        <div className='NewTransactionButton' onClick={() => navigate('/transaction')} >
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