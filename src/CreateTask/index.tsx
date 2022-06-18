import React from 'react'
import SelectReport from './SelectReport'

interface IForm {
    reportId: string;
    filter: never[];
}

export default function CreateTask () {
    const [form, setForm] = React.useState<IForm>({
        reportId: '',
        filter: []
    })
    return (
        <div>
            <h4>Новая задача</h4>
            <div>
                <SelectReport/>
            </div>

        </div>
    )
}
