import React from 'react'
import {IReportSchemeById} from "../../interfaces";
import axios from "axios";

interface IPropsComponent {
    reportId: string | undefined
}

export default function TableReport({
                                        reportId = ''
                                    }: IPropsComponent) {
    const [load, setLoad] = React.useState<boolean>(false);
    const [reportScheme, setReportScheme] = React.useState<IReportSchemeById[]>();
    const [report, setReport] = React.useState<never[]>([])


    React.useEffect(() => {
        if (reportScheme?.length) getReport()
    }, [reportScheme])

    const getReport = async () => {
        await setLoad(true)
        try {
            const response = await axios(`http://localhost:3001/report/ready`, {
                method: 'POST',
                data: {
                    reportId,
                    size: 20,
                    page: 1,
                    total: 1000,
                    status: 2
                }
            })
            const result = await response.data.body.entityList
            await setLoad(false)
            setReport(result)
        } catch (e) {
            setLoad(false)
            alert('error response for http://localhost:3001/report/ready')
        }
    }

    React.useEffect(() => {
        if (reportId) getReportSchemeById()
    }, [reportId])

    const getReportSchemeById = async () => {
        await setLoad(true)
        try {
            const response = await axios(`http://localhost:3001/reportScheme/${reportId}`, {
                method: 'GET'
            })
            const result = await response.data.body
            await setLoad(false)
            setReportScheme(result)
        } catch (e) {
            setLoad(false)
            alert('error response for http://localhost:3001/reportScheme')
        }
    }

    if (load) return (
        <div>
            Waiting...
        </div>
    )

    return (
        <div>
            <table className={'table'}>
                <thead>
                <tr>
                    {reportScheme && reportScheme.filter((el: IReportSchemeById) => el.visible).map((el: IReportSchemeById) => (
                        <th key={el.attributeName}>
                            {el.attributeDescription}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {report && report.map((el: any, index) => (
                    <tr key={index}>
                        {reportScheme && reportScheme.filter((el: IReportSchemeById) => el.visible).map((col: IReportSchemeById, i) => (
                            <td key={i}>
                                {el[col.attributeName.toLowerCase()]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
