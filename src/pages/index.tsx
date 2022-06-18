import React from 'react'
import './style.css'
import {
    Routes,
    Route,
    NavLink,
    Outlet
} from "react-router-dom";
import TaskList from "./TaskList";
import {TaskPage} from "./Task";
import {NoMatch} from "./NoMatch";

function Layout() {
    return (
        <div>
            <nav>
                <NavLink to="/">Список задач</NavLink> |{" "}
                <NavLink to="task">Задача</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}

const R = () => {
    return (<div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<TaskList/>}/>
                    <Route path="task/:id" element={<TaskPage/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export {R}
