import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"

export function LayoutLoggedIn () {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-grow px-10 pt-20">
                <Outlet />

            </div>

        </div>
    )
}
