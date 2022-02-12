import React, {FC} from 'react';
import TransactionBox from './TransactionBox';

interface HistoryProps {
    Transactions: any
}

const TransactionContainer:FC<HistoryProps> = ({Transactions}):JSX.Element => {

    let view = (
        <>
            
            <div className='TransactionLists'>
                <TransactionBox />
                <TransactionBox />
                <TransactionBox />
            </div>
        </>
    )
    if(!Transactions){
        view = <p style={{textAlign: 'center'}} >you have not made any transactions yet</p>
    }

    return (
        <div className='TransactionContainer'>
            <div className="TransactionContainerHeader">
                <p>Sender</p>
                <p>Reciever</p>
                <p>Value</p>
                <p>Currency</p>
                <p>Date</p>
            </div>
            {view}
        </div>
    );
}

export default TransactionContainer;