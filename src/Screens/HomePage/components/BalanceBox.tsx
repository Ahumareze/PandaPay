import React from 'react';

function BalanceBox() {
    return (
        <div className='BalanceBox'>
            <div className='BalanceBoxBalance'>
                <p>$200</p>
            </div>
            <div className="BalanceBoxDetails">
                <div className="CountryFlag"></div>
                <p>USD balance</p>
            </div>
        </div>
    );
}

export default BalanceBox;