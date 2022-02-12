import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './TransactionPage.css';

//Imported Components
import { Header, Loader } from '../../Components';
import ListItem from './components/ListItem';
import TransactionInput from './components/TransactionInput';

import * as actions from '../../Redux/actions';

function TransactionPage(props: any) {
    const [selectedUser, setSelectedUser] = useState<any>();

    const [amountSending, setAmountSending] = useState(100);
    const [amountRecieving, setAmountRecieving] = useState<any>();

    const [sendingCurrency, setSendingCurrency] = useState<any>('1 usdBalance USD');
    const [recievingCurrency, setRecievingCurrency] = useState<any>('1 usdBalance USD');

    const [SendingCurrencyName, setSendingCurrencyName] = useState<any>();
    const [RecievingCurrencyName, setRecievingCurrencyName] = useState<any>();

    const [rates, setRates] = useState<number>();
    const [sendingRateName, setSendingRateName] = useState();
    const [recievingRateName, setRecievingRateName] = useState();

    useEffect(() => {
        props.getList();
    }, [])

    useEffect(() => {
        converter();
    }, [amountSending, sendingCurrency, recievingCurrency]);

    const converter = () => {
        const splitCurrency = sendingCurrency.split(' ');
        const sendingCurrencyValue = JSON.parse(splitCurrency[0]);
        const sendingCurrencyName = splitCurrency[1];
        const sendingCurrencyAbb = splitCurrency[2];

        const splitRecievingCurrency = recievingCurrency.split(' ');
        const recievingCurrencyValue = JSON.parse(splitRecievingCurrency[0]);
        const recievingCurrencyName = splitRecievingCurrency[1];
        const recievingCurrencyAbb = splitRecievingCurrency[2];

        const rate = recievingCurrencyValue/sendingCurrencyValue;
        setRates(rate);
        setRecievingRateName(recievingCurrencyAbb);
        setSendingRateName(sendingCurrencyAbb);

        setSendingCurrencyName(sendingCurrencyName);
        setRecievingCurrencyName(recievingCurrencyName);

        const convertedAmount = (recievingCurrencyValue/sendingCurrencyValue) * amountSending

        setAmountRecieving(convertedAmount)
    }

    const navigate = (e:string) => {
        props.history.push(e)
    }

    const onSelect = (e: any) => {
        setSelectedUser(e)
    }

    const Transfer = () => {
        const userData = props.userData;
        const recieverData = selectedUser;
        const data = {
            amountSending: amountSending,
            amountRecieving: amountRecieving,
            SendingCurrencyName: SendingCurrencyName,
            RecievingCurrencyName: RecievingCurrencyName
        }
        // let SDB = 0;
        // Object.keys(userData).map(i => {
        //     if(i === SendingCurrencyName){
        //         SDB = userData[i]
        //     }
        // });
        // if(SendingCurrencyName === 'usdBalance'){
        //     console.log({...userData, usdBalance: SDB - amountSending })
        // }else if(SendingCurrencyName === 'eurBalance'){
        //     console.log({...userData, eurBalance: SDB - amountSending})
        // }else{
        //     console.log({...userData, ngnBalance: SDB - amounng}tSendi)
        // }
        props.Transfer(userData, recieverData, data)
    }

    let TransferContainer;
    if(selectedUser){
        TransferContainer = (
            <>
                <ListItem username={selectedUser.username} email={selectedUser.email} onClick={() => console.log() } />
                <div className="MainTransferContainer">
                    <TransactionInput 
                        value={amountSending} 
                        name='You' 
                        details='Send' 
                        reciever={false}
                        setCurrencyValue={(e) => setSendingCurrency(e)}
                        setAmountSending={(e) => setAmountSending(e) } 
                    />
                    <p className='TransferRate'>at a rate of {rates && rates.toFixed(2)}{recievingRateName} to 1{sendingRateName}</p>
                    <TransactionInput 
                        name={selectedUser.username} 
                        value={amountRecieving} 
                        details='Recieves' 
                        reciever 
                        setCurrencyValue={(e) => setRecievingCurrency(e)}
                        setAmountSending={(e) => setAmountSending(e)} 
                    />
                </div>
                {props.TransactionError && <p className='TransferError' >{props.TransactionError}</p>}
                <div className="confirmTransactionButton" onClick={() => Transfer()} >
                    <p>Confirm Transaction</p>
                </div>
            </>
        )
    }else{
        TransferContainer = (
            <p>No user selected</p>
        )
    }

    let view = (
        <div className='section'>
            <div className='ListSection'>
                <div className='UsersListsContainer'>
                    <p className='UserListContainerTitle'>Select <span>User</span></p>
                    <div className='ListsContainer'>
                        {props.usersList && props.usersList.map((i: any) => {
                            return <ListItem username={i.username} email={i.email} onClick={() => onSelect(i)} key={i.email} />
                        })}
                    </div>
                </div>
            </div>
            <div className="TransferSection">
                <div className="TransferContainer">
                    {TransferContainer}
                </div>
            </div>
        </div>
    )

    return (
        <div className='TransactionPage'>
            <Header home={false} navigate={(e) => navigate(e)} logout={() => props.logout()} />
            {props.loading ? <Loader /> :  view}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return{
        usersList: state.usersList,
        loading: state.loading,
        userData: state.userData,
        TransactionError: state.TransactionError
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        logout: () => dispatch(actions.logout()),
        getList: () => dispatch(actions.getUsersList()),
        Transfer: (userData: any, recieverData: any, data: any) => dispatch(actions.Transfer(userData, recieverData, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);