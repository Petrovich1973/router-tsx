import React, {FC} from 'react';
import {IInput} from '../interfaces'

const Input: FC<IInput> = ({value, onChange}) => {
    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    )
}

export {Input}
