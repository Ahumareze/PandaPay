import React, { useEffect } from 'react';
import './HomePage.css';

//Imported packeges
import { connect } from 'react-redux';

//Components
import { Error, Header, Loader } from '../../Components';
import BalanceBox from './components/BalanceBox';
import TransactionContainer from './components/TransactionContainer';

import * as actions from '../../Redux/actions';

import USD from '../../Assets/flags/USD.png';
import EUR from '../../Assets/flags/EUR.jpg';
import NGN from '../../Assets/flags/NGN.jpg';

function HomePage(props: any) {

    useEffect(() => {
        props.fetchData();
    }, [])

    const navigate = (e:string) => {
        props.history.push(e)
    }

    let view = (
        <section>
            <div className='BalancesContainer'>
                <BalanceBox value={props.userData &&  props.userData.usdBalance} currency='USD' sign='$' flag={USD} />
                <BalanceBox value={props.userData && props.userData.eurBalance} currency='EUR' sign='€' flag={EUR} />
                <BalanceBox value={props.userData && props.userData.ngnBalance} currency='NGN' sign='₦' flag={NGN} />
            </div>
            <div className='HistoryContainer'>
                <div className='HeaderHistoryTopDiv'>
                    <p className='HistoryHeader'>Transaction <span>History</span> </p>
                    <div className='NewTransactionButton' onClick={() => navigate('/transaction')} >
                        <p>New Transaction</p>
                    </div>
                </div>
                <TransactionContainer Transactions={props.userData && props.userData.transactions} username={props.userData && props.userData.username } />
            </div>
        </section>
    )
    if(!props.userData){
        view = (
            <Error />
        )
    }

    return (
        <div className='HomePage'>
            <Header home navigate={(e) => navigate(e)} logout={() => props.logout()} userName={props.userData ? props.userData.username : '' } />
            {props.loading ? <Loader /> : view }
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return{
        userData: state.userData,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        logout: () => dispatch(actions.logout()),
        fetchData: () => dispatch(actions.fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);