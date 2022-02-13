import React, {FC} from 'react';

interface TransactionBoxProps {
    username: string,
    sender: string,
    reciever: string,
    value: any,
    currency: string,
    date: string,
    debit: boolean
}

const TransactionBox:FC<TransactionBoxProps> = ({username, sender, reciever, value, currency, date, debit}):JSX.Element => {
    const val = JSON.parse(value);
    let extraDetail = <p style={{color: '#00DD55', fontWeight: 'bold'}}>+{val.toFixed(2)}</p>
    if(debit){
        extraDetail = <p style={{color: 'red', fontWeight: 'bold'}} >-{val.toFixed(2)}</p>
    }

    return (
        <div className='TransactionBox'>
            <p>{username === sender ? 'You' : sender}</p>
            <p>{username === reciever ? 'You' : reciever}</p>
            {extraDetail}
            <p>{currency}</p>
            <p>{date}</p>
        </div>
    );
}

export default TransactionBox;