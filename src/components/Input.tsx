import React, {FC} from 'react'
import {IInput} from '../interfaces'

const Input: FC<IInput> = ({
                               value,
                               onChange,
                               disabled = false,
                               label,
                               name,
                               className
                           }) => {
    return (
        <div className={`Input ${className}`}>
            {label && (
                <label htmlFor={name}>{label}</label>
            )}
            <input
                name={name}
                id={name}
                disabled={disabled}
                type="text"
                value={value}
                onChange={onChange}/>
        </div>
    )
}

export {Input}
