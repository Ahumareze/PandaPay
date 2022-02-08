import React from 'react';
import { Header } from '../../Components';

import './TransactionPage.css';

function TransactionPage(props: any) {
    const navigate = (e:string) => {
        props.history.push(e)
    }

    return (
        <div className='TransactionPage'>
            <Header home={false} navigate={(e) => navigate(e)} />
        </div>
    );
}

export default TransactionPage;