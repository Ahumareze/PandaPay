import React, {FC, useEffect, useState} from 'react';

interface InputProps{
    name: string,
    details: string,
    reciever: boolean,
    value: any,
    setCurrencyValue: (e: string) => void,
    setAmountSending: (e: any) => void
}

const TransactionInput:FC<InputProps> = ({name, details, reciever, setAmountSending, value, setCurrencyValue}):JSX.Element => {

    let view = <input value={value} onChange={(e) => setAmountSending(e.target.value) } />
    if(reciever){
        view = (
            <div className='TIP_Div'>
                <p>{value.toFixed(2)}</p>
            </div>
        )
    }

    return (
        <div className='TransactionInputItem'>
            <p className='TransactionInputTitle'>{name} <span>{details}</span></p>
            <div className="TransactionInputContainer">
                {view}
                <select className='TransactionCurrency' onChange={(i) => setCurrencyValue(i.target.value)} >
                    <option value={`${1} usdBalance USD`}>USD</option>
                    <option value={`${0.88} eurBalance EUR`}>EUR</option>
                    <option value={`${420} ngnBalance NGN`}>NGN</option>
                </select>
            </div>
        </div>
    );
}

export default TransactionInput;