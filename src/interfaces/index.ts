import React, {InputHTMLAttributes} from "react"

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    value: string | number
    label?: string | number
    disabled?: boolean
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ISchemeRow {
    id: number
    association: string
    label: string
    handler: (e?: any) => any
}

export interface IDataRow {
    r_n: number
    name: string
    age: number
    gender: boolean
    status: number
}
