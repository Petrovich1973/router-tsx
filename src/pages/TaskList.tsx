import React from 'react'
import axios from "axios";
import {ITask} from "../interfaces";
import moment from "moment";
import {Link} from "react-router-dom";

export default function TaskList() {
    const [load, setLoad] = React.useState(false);
    const [tasks, setTasks] = React.useState<ITask[]>([]);
    const [time, setTime] = React.useState(moment().format('HH:mm:ss'));

    React.useEffect(() => {
        getTasks()
    }, [])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            getTasks()
        }, 3000);
        return () => clearTimeout(timer);
    }, [tasks]);

    const getTasks = async () => {
        await setLoad(true)
        try {
            const response = await axios(`http://localhost:3001/task`, {
                method: 'GET'
            })
            const result = await response.data.body
            await setLoad(false)
            setTasks(result)
            setTime(moment().format('HH:mm:ss'))
        } catch (e) {
            setLoad(false)
            alert('error response for http://localhost:3001/task')
        }
    }

    return (
        <div>
            <div>{load ? 'waiting...' : `Обновлено ${time}`}</div>
            {tasks.map((el: ITask) => {
                const keys: any[] = Object.entries(el).map(([key, value]) => {
                    if (typeof value === 'string' || typeof value === 'number') {
                        return (<div key={key}>{key}: <strong>{value}</strong></div>);
                    }
                    return (<React.Fragment key={key}>{''}</React.Fragment>);
                });
                return (
                    <div
                        key={el.taskId}
                        style={{padding: 20, margin: 4, border: '1px solid #ccc', position: 'relative'}}>
                        {keys}{''}
                        <Link
                            style={{position: 'absolute', top: 0, right: 0}}
                            to={'task/' + el.taskId}>Перейти страницу задачи</Link>
                    </div>
                )
            })}
        </div>
    )
}
