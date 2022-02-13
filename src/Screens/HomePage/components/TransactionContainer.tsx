import React, {FC} from 'react';
import TransactionBox from './TransactionBox';

interface HistoryProps {
    Transactions: any
}

const TransactionContainer:FC<HistoryProps> = ({Transactions}):JSX.Element => {

    let view = (
        <>
            <div className='TransactionLists'>
                {Transactions && Object.keys(Transactions).map((i:any) => {
                    return <TransactionBox
                        sender={Transactions[i].sender}
                        reciever={Transactions[i].reciever}
                        value={Transactions[i].value}
                        currency={Transactions[i].currency}
                        date={Transactions[i].date}
                        debit={Transactions[i].debit}
                        key={i}
                    />
                }) }
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