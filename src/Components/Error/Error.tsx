import React, {FC} from 'react';
import './Error.css';

interface ErrorProps {
    transactionError: boolean
}

const Error:FC<ErrorProps> = ({transactionError}):JSX.Element => {
    return (
        <div className='ErrorScreen'>
            <p>Error fetching Data</p>
        </div>
    );
}

export default Error;