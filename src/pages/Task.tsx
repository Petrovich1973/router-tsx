import React from 'react'
import {
    useParams,
} from "react-router-dom";
import TaskIntro from "../components/Report/TaskIntro";
import {Button} from "@mui/material";
import {ITask} from "../interfaces";
import {NoMatch} from "./NoMatch";
import axios from "axios";
import TableReport from "../components/Report/TableReport";

export function TaskPage() {
    const {id} = useParams<any>();
    const [load, setLoad] = React.useState<boolean>(false);
    const [task, setTask] = React.useState<ITask>();

    const [isViewReport, setIsViewReport] = React.useState<boolean>(false);

    React.useEffect(() => {
        getTask()
    }, [])

    const getTask = async () => {
        setLoad(true)
        try {
            const response = await axios(`http://localhost:3001/task/${id}`, {
                method: 'GET'
            })
            const result = await response.data.body
            await setLoad(false)
            setTask(result)
        } catch (e) {
            setLoad(false)
            alert('error response for http://localhost:3001/task')
        }
    }

    const handleGetReport = () => setIsViewReport(true)

    if (!id) return <NoMatch/>;

    if (load) return <div>Waiting...</div>;

    return (
        <div>
            <TaskIntro task={task}/>
            {task?.taskStatus === 4 &&
            <Button onClick={handleGetReport} color={'success'} variant="contained" disableElevation>
                Смотреть отчет
            </Button>}
            {isViewReport && !load && <TableReport reportId={task?.reportId}/>}
        </div>
    )
}
