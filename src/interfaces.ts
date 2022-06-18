export interface ISchemeRow {
    id: number;
    association: string;
    label: string;
    handler: any;
}

export interface IDataRow {
    r_n: number;
    name: string;
    age: number;
    gender: boolean;
    status: number;
}

export interface IInput {
    value: string;
    onChange: any;
    disabled?: boolean;
    label: any;
    name: string;
    className?: string;
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
