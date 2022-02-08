import React, {FC} from 'react';

interface inputProps {
    title: string
}

const FormInput: FC<inputProps> = ({title}): JSX.Element => {
    return (
        <div className='FormInput'>
            <p>{title}</p>
            <input />
        </div>
    );
}

export default FormInput;