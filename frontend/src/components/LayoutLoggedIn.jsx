import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"

export function LayoutLoggedIn () {
    return (
        <div className="flex">
            <Sidebar/>
            <Outlet />


        </div>
    )
}
