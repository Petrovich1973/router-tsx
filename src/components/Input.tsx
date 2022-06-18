import React, {FC} from 'react'
import {IInput} from '../interfaces'

const Input = ({
                   value = '',
                   onChange = () => console.log('input change'),
                   disabled = false,
                   label = '',
                   name = '',
                   className = ''
               }: IInput) => {
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
