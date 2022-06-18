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


/////////////////////////////////////
export interface ITaskError {
    id: number;
    code: string;
    message: string;
}

export interface ITaskFilter {
    filterId: string;
    filterDescription: string;
    value1: any;
    value2?: any;
}

export interface ITask {
    taskId: number;
    reportId: string;
    taskCreationDate: string;
    taskStatus: number;
    schedulingType: number;
    scheduledTime: string;
    startExecuting: string;
    finishExecuting: string;
    lifetimeLimit: number;
    errors: ITaskError[];
    errorsCount: number;
    reportName: string;
    author: string;
    idMega: string;
    filters: ITaskFilter[];
}

export interface IReportSchemeById {
    attributeDescription: string;
    attributeName: string;
    attributeType: string;
    filterOperation: string | null;
    reportId: string;
    visible: boolean;
    visualType: string | null;
}
