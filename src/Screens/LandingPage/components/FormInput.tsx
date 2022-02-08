import React, {FC} from 'react';

interface inputProps {
    title: string,
    setValue: (e: any) => void
}

const FormInput: FC<inputProps> = ({title,setValue}): JSX.Element => {
    return (
        <div className='FormInput'>
            <p>{title}</p>
            <input onChange={(e) => setValue(e.target.value)} />
        </div>
    );
}

export default FormInput;