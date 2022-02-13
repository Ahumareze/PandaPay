import React, {FC, useEffect, useState} from 'react';

interface ListitemProps {
    username: any,
    email: any,
    onClick: () => void
}

const ListItem:FC<ListitemProps> = ({username, email, onClick}):JSX.Element => {
    const [mail, setMail] = useState<any>();

    useEffect(() => {
        if(email.length > 15){
            var string = email;
            var length = 22;
            var trimmedString = string.substring(0, length);
            setMail(trimmedString + '...')
        }else{
            setMail(email)
        }
    }, [])
    return (
        <div className='ListItem' onClick={() => onClick()}>
            <div className='UserProfilePic'>
                <p>{username.charAt(0)}</p>
            </div>
            <div>
                <p className='ListItemUsername'>{username}</p>
                <p className='ListItemEmail'>{mail}</p>
            </div>
        </div>
    );
}

export default ListItem;