import React, {FC} from 'react';

import {AiOutlineCheckCircle} from 'react-icons/ai'

interface SentProps {
    onClick: () => void
}

const Sent:FC<SentProps> = ({onClick}):JSX.Element => {
    return (
        <div className='Sent'>
            <AiOutlineCheckCircle size={50} color='#00DD55' />
            <p className='SentDetails'>Sent successfully</p>
            <div className='BackToHomeButton' onClick={() => onClick()} >
                <p>Back to home</p>
            </div>
        </div>
    );
}

export default Sent;