import React from 'react';
import './CreditCard.css';

import mastercard from '../../Assets/mastercard.png';

function CreditCard() {
    return (
        <div className='CreditCard'>
            <div className='CreditCard_Top'></div>
            <div className='CreditCard_Middle'>
                <p>1234 5678 9012 3456</p>
            </div>
            <div className='CreditCard_Bottom'>
                <div className='CreditCard_Bottom_D1'>
                    <p>Martin Sky</p>
                </div>
                <div className='CreditCard_Bottom_D2'>
                    <img src={mastercard} />
                </div>
            </div>
        </div>
    );
}

export default CreditCard;