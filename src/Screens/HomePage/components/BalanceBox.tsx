import React, {FC} from 'react';

interface BalanceBoxProps{
    value: any,
    currency: string,
    sign: string,
    flag: any
}

const BalanceBox:FC<BalanceBoxProps> = ({value, currency, sign, flag}):JSX.Element =>  {
    return (
        <div className='BalanceBox'>
            <div className='BalanceBoxBalance'>
                <p>{sign}{value.toFixed(2)}</p>
            </div>
            <div className="BalanceBoxDetails">
                <div className="CountryFlag">
                    <img src={flag} />
                </div>
                <p>{currency} balance</p>
            </div>
        </div>
    );
}

export default BalanceBox;