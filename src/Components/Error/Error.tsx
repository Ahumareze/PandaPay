import React, {FC} from 'react';
import './Error.css';

import {RiSignalWifiErrorLine} from 'react-icons/ri';

interface ErrorProps {
    
}

const Error:FC<ErrorProps> = ({}):JSX.Element => {
    return (
        <div className='ErrorScreen'>
            <RiSignalWifiErrorLine size={50} />
            <p className='MainErrorMessage'>Error fetching Data</p>
            <p className='ExtraErrorMessage'>An error occured while fetching data, please refresh page</p>
        </div>
    );
}

export default Error;