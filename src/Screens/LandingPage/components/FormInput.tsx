import React, {FC} from 'react';

interface inputProps {
    title: string,
    secure: boolean,
    setValue: (e: any) => void
}

const FormInput: FC<inputProps> = ({title,setValue, secure}): JSX.Element => {
    return (
        <div className='FormInput'>
            <p>{title}</p>
            <input onChange={(e) => setValue(e.target.value)} type={secure ? 'password' : 'text'} />
        </div>
    );
}

export default FormInput;