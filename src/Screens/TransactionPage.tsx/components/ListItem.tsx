import React, {FC} from 'react';

interface ListitemProps {
    username: any,
    email: any,
    onClick: () => void
}

const ListItem:FC<ListitemProps> = ({username, email, onClick}):JSX.Element => {
    return (
        <div className='ListItem' onClick={() => onClick()}>
            <div className='UserProfilePic'>
                <p>{username.charAt(0)}</p>
            </div>
            <div>
                <p className='ListItemUsername'>{username}</p>
                <p className='ListItemEmail'>{email}</p>
            </div>
        </div>
    );
}

export default ListItem;