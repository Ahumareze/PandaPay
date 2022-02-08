import React from 'react';
import TransactionBox from './TransactionBox';

function TransactionContainer() {
    return (
        <div className='TransactionContainer'>
            <div className="TransactionContainerHeader">
                <p>Sender</p>
                <p>Reciever</p>
                <p>Value</p>
                <p>Currency</p>
                <p>Date</p>
            </div>
            <div className='TransactionLists'>
                <TransactionBox />
                <TransactionBox />
                <TransactionBox />
            </div>
        </div>
    );
}

export default TransactionContainer;